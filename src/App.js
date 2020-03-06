import React from 'react';
import { AppState } from './context/AppContext';
import Dialog from './components/Dialog';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import TodoList from './components/TodoList';

function App() {
  return (
    <AppState>
      <div className='App'>
        <Dialog />
        <Navigation />
        <Container className='my-3'>
          <TodoList />
        </Container>
      </div>
    </AppState>
  );
}

export default App;
