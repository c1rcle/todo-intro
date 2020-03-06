import React, { useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const Dialog = () => {
  const appContext = useContext(AppContext);
  const { setDialogVisible, dialogVisible } = appContext;

  return (
    <Modal show={dialogVisible} onHide={() => setDialogVisible(false)}>
      <Modal.Header>
        <Modal.Title>New todo list</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control type='text' placeholder='Enter name' />
      </Modal.Body>

      <Modal.Footer>
        <Button variant='primary'>Create</Button>
        <Button variant='secondary' onClick={() => setDialogVisible(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
