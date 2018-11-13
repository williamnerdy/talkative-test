import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Logo from '../logo';
import Copyright from '../copyright';
import Link from '../link';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col size={3}>
          <Logo />
        </Col>
        <Col size={4}>
          <Copyright />
        </Col>
        <Col size={5}>
          <Link to="//example.com">Enviar Feedback</Link>
          <Link to="//example.com">Sobre Nós</Link>
          <Link to="//example.com">Fale Conosco</Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
