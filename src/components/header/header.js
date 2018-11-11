import React from 'react';
import Container from '../container';
import Row from '../row';
import ReaderMessage from '../header-message';
import './style.css';

const Header = () => (
  <header className="header">
    <Container>
      <Row>
        <ReaderMessage>Sua voz será ouvida e recompensada</ReaderMessage>
      </Row>
    </Container>
  </header>
);

export default Header;
