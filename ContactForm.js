import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <ModalComponent show={showModal} handleClose={() => setShowModal(false)} formData={formData} />
        </>
    );
};

export default ContactForm;