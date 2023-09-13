import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CreateModal from './create.modal';
// không cần import do tự động TypeScript sẽ đi tìm .d.ts check lại

interface IProp {
	blogs: IBlogs[];
}

export default function PostList(props: IProp) {
	const { blogs } = props;

	const [isShowModal, setIsShowModal] = useState<boolean>(false);

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
					{blogs?.map((blog) => {
						return (
							<tr key={blog.id}>
								<td className="p-3">{blog.id}</td>
								<td className="p-3">{blog.title}</td>
								<td className="p-3">{blog.author}</td>
								<td className="p-3">
									<Button variant="primary">Edit</Button>
									<Button variant="danger mx-3">Delete</Button>
									<Button variant="success">View</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<CreateModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
		</>
	);
}
