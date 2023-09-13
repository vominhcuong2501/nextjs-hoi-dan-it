'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
	isShowModal: boolean;
	setIsShowModal: (value: boolean) => void;
}

function CreateModal(props: IProps) {
	const { isShowModal, setIsShowModal } = props;
	const [title, setTitle] = useState<string>('');
	const [author, setAuthor] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const handleSubmit = () => {
		console.log(title, author, content);
		handleCloseModal();
	};
	const handleCloseModal = () => {
		setTitle('');
		setAuthor('');
		setContent('');
		setIsShowModal(false);
	};
	return (
		<>
			<Modal show={isShowModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add new a blog</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Author</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setAuthor(e.target.value)}
								value={author}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								onChange={(e) => setContent(e.target.value)}
								value={content}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CreateModal;
