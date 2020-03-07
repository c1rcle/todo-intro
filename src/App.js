import React from 'react';
import { AppState } from './context/AppContext';
import Dialog from './components/Dialog';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <AppState>
      <Dialog />
      <Navigation />
      <Container className='my-3'>
        <TodoList />
      </Container>
    </AppState>
  );
}

export default App;
