import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose, formData }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Form Submitted</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Name: {formData.name}</h5>
                <h5>Email: {formData.email}</h5>
                <p>Message: {formData.message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;