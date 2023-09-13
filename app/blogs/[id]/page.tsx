'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';

export default function ViewDetailBlog({ params }: { params: { id: string } }) {
	const router = useRouter();

	const fetcher: Fetcher<IBlogs, string> = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	if (isLoading) {
		// toast.loading('Waiting an second!!! Thanks');
		return 'Loading...';
	}

	return (
		<>
			<div className="cursor-pointer" onClick={() => router.back()}>
				Go Back
			</div>
			<Card className="text-center mt-5">
				<Card.Header>
					<h1>{data?.title}</h1>
				</Card.Header>
				<Card.Body>
					<Card.Text>{data?.content}</Card.Text>
					<Link href="/blogs" className="btn btn-primary my-3">
						Go Blogs
					</Link>
				</Card.Body>
				<Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
			</Card>
		</>
	);
}
