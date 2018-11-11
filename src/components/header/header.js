import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import ReaderMessage from '../header-message';
import './style.css';

const Header = () => (
  <header className="header">
    <Container>
      <Row>
        <Col size={6}>
          <ReaderMessage>Sua voz será ouvida e recompensada</ReaderMessage>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
