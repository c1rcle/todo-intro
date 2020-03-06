import React from 'react';
import { AppState } from './context/AppContext';
import Dialog from './components/Dialog';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <AppState>
      <div className='App'>
        <Dialog />
        <Navigation />
        <Container></Container>
      </div>
    </AppState>
  );
}

export default App;
