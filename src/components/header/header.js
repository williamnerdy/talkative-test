import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Title from '../title';
import './style.css';

const Header = () => (
  <header className="header">
    <Container>
      <Row>
        <Col size={5}>
          <Title color="white" style={{ fontSize: '36px' }}>
            Sua voz será ouvida e recompensada
          </Title>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
