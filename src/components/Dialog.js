import React, { useContext, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const Dialog = () => {
  const appContext = useContext(AppContext);
  const { setDialogVisible, addList, dialogVisible } = appContext;

  const [name, setName] = useState('');

  const addListPressed = event => {
    event.preventDefault();
    if (name !== '') addList(name);
    setDialogVisible(false);
    setName('');
  };

  return (
    <Modal show={dialogVisible} onHide={() => setDialogVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>New todo list</Modal.Title>
      </Modal.Header>

      <Form onSubmit={addListPressed}>
        <Modal.Body>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='primary' type='submit'>
            Create
          </Button>
          <Button variant='secondary' onClick={() => setDialogVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Dialog;
