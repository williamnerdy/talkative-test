import React from 'react';
import Container from '../container';
import Row from '../row';
import Col from '../col';
import Card from '../card';
import Title from '../title';
import Form from '../form';
import Input from '../input';
import Button from '../button';
import Icon from '../icon';

const Main = () => (
  <Container>
    <Row reverse>
      <Col size={7}>
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
            <Row>
              <Col size={6}>
                <Button color="facebook" type="button">
                  <Icon name="facebook" />
                  <span>Entrar com o Facebook</span>
                </Button>
              </Col>
              <Col size={6}>
                <Button color="form">
                  <Icon name="sign-in" />
                  <span>Entrar</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
      <Col size={5}>
        <p style={{ padding: '30px 0' }}>
          Você foi convidado a participar da mais inovadora ferramenta de mídia
          para micro-influenciadores nas redes sociais.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Main;
