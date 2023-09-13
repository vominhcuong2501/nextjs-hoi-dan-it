'use client';
import PostList from '../component/postList';
import useSWR from 'swr';

export default function Home() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	if (!data) return;
	console.log('data : ', data);

	return (
		<>
			<PostList blogs={data} />
		</>
	);
}
