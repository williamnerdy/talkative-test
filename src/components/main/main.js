import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Card from '../card';

const Main = () => (
  <Container>
    <Row reverse>
      <Col>
        <Card>Card content...</Card>
      </Col>
      <Col>Main left</Col>
    </Row>
  </Container>
);

export default Main;
