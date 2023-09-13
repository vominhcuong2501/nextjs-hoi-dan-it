'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
	title: 'Learn NextJS | Easy Frontend',
	description: 'Learn NextJS + Typescript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		// console.log(url);
	}, [pathname, searchParams]);

	return (
		<html lang="en">
			<body className={inter.className}>
				<ul className="flex justify-center">
					<li className="m-3">
						<Link href={'/'}>Home</Link>
					</li>
					<li className="m-3">
						<Link href={'/about'} replace>
							About
						</Link>
					</li>
					<li className="m-3">
						<Link href={'/posts'} scroll={false}>
							Post
						</Link>
					</li>
					<li className="m-3">
						<Link href={'/posts/create'} prefetch={true}>
							Create
						</Link>
					</li>
				</ul>
				<main className="max-w-[1200px] mx-auto">{children}</main>
			</body>
		</html>
	);
}
