import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';
import Link from 'next/link';
// không cần import do tự động TypeScript sẽ đi tìm .d.ts check lại
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProp {
	blogs: IBlogs[];
}

export default function PostList(props: IProp) {
	const { blogs } = props;

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const [isShowUpdate, setIsShowUpdate] = useState<boolean>(false);

	const [blog, setBlog] = useState<IBlogs | null>(null);

	const handleDelete = (id: number) => {
		if (confirm(`Are you delete blog have ID: ${id}??`) == true) {
			fetch(`http://localhost:8000/blogs/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					if (res) {
						toast.success('Delete succeed !!!');
						mutate('http://localhost:8000/blogs');
					}
				});
		} else {
			toast.warning('Delete fail !!!');
		}
	};

	return (
		<>
			<div className="d-flex justify-content-between">
				<h1>Blogs Table</h1>
				<Button variant="info" onClick={() => setIsShowModal(true)}>
					Add new
				</Button>
			</div>
			<Table striped bordered hover width={800} className="mt-3">
				<thead>
					<tr>
						<th className="p-3">NO</th>
						<th className="p-3">Title</th>
						<th className="p-3">Author</th>
						<th className="p-3">Action</th>
					</tr>
				</thead>
				<tbody>
					{blogs?.map((item) => {
						return (
							<tr key={item.id}>
								<td className="p-3">{item.id}</td>
								<td className="p-3">{item.title}</td>
								<td className="p-3">{item.author}</td>
								<td className="p-3">
									<Button
										variant="primary"
										onClick={() => {
											setBlog(item);
											setIsShowUpdate(true);
										}}
									>
										Edit
									</Button>
									<Button variant="danger mx-3" onClick={() => handleDelete(item.id)}>
										Delete
									</Button>
									<Link href={`/blogs/${item.id}`} className="btn btn-success">
										View
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<CreateModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
			<UpdateModal
				isShowUpdate={isShowUpdate}
				setIsShowUpdate={setIsShowUpdate}
				blog={blog}
				setBlog={setBlog}
			/>
		</>
	);
}
