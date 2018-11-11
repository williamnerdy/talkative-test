import React from 'react';
import Container from '../container';
import ReaderMessage from '../header-message';
import './style.css';

const Header = () => (
  <header className="header">
    <Container>
      <ReaderMessage>Sua voz será ouvida e recompensada</ReaderMessage>
    </Container>
  </header>
);

export default Header;
