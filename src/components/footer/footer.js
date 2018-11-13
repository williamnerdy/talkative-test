import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Logo from '../logo';
import Copyright from '../copyright';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col size={4}>
          <Logo />
        </Col>
        <Col size={4}>
          <Copyright />
        </Col>
        <Col size={4}>Footer center</Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
