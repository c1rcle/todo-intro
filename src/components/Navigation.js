import React, { useContext } from 'react';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const Navigation = () => {
  const appContext = useContext(AppContext);
  const { setDialogVisible } = appContext;

  return (
    <Navbar variant='dark' bg='primary'>
      <Container>
        <Navbar.Brand>
          <i className='far fa-sticky-note' /> Todo list
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Button variant='success' onClick={() => setDialogVisible(true)}>
            Add
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
