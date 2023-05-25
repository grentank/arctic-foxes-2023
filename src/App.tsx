import React from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <MainPage />
    </Container>
  );
}

export default App;
