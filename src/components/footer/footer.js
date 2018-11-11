import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col size={4}>Footer left</Col>
        <Col size={4}>Footer right</Col>
        <Col size={4}>Footer center</Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
