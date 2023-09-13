'use client';
import PostList from '@/component/postList';
import React from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';

export default function BlogsPage() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	if (isLoading) {
		// toast.loading('Waiting an second!!! Thanks');
		return 'Loading...';
	}

	return (
		<div>
			<PostList blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
		</div>
	);
}
