import React from 'react';
import { Modal } from 'react-bootstrap'; // Importing Bootstrap Modal
import { Signup } from './signup'; // Import your Signup component

export const SignupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Signup />
      </Modal.Body>
    </Modal>
  );
};


