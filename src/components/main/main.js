import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Card from '../card';
import Title from '../title';
import Form from '../form';
import Input from '../input';

const Main = () => (
  <Container>
    <Row reverse>
      <Col>
        <Card>
          <Title style={{ textAlign: 'center' }}>
            Sua primeira tarefa é preencher seus dados de acesso:
          </Title>
          <Form>
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              autocorrect="off"
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              autocomplete="off"
            />
          </Form>
        </Card>
      </Col>
      <Col>
        <p style={{ padding: '30px 0' }}>
          Você foi convidado a participar da mais inovadora ferramenta de mídia
          para micro-influenciadores nas redes sociais.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Main;
