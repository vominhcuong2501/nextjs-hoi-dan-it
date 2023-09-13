import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
	title: 'Home Page',
	description: 'Learn NextJS + Typescript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ul className="flex justify-center">
					<li className="m-3">
						<Link href={'/'}>Hoi Dan IT</Link>
					</li>
					<li className="m-3">
						<Link href={'/blogs'}>Blogs</Link>
					</li>
				</ul>
				<main className="max-w-[1200px] mx-auto">{children}</main>
				<ToastContainer />
			</body>
		</html>
	);
}
