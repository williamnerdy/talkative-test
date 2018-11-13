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
import Countdown from '../countdown';

const Main = () => (
  <Container>
    <Row reverse>
      <Col size={7}>
        <Card>
          <Title style={{ textAlign: 'center' }}>
            Para validar seu convite é preciso cadastrar os seguintes dados:
          </Title>
          <Form>
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              autoCorrect="off"
            />
            <Input
              name="password"
              type="password"
              placeholder="Escolha sua senha"
              autoComplete="off"
            />
            <Input
              name="password"
              type="password"
              placeholder="Confirme sua senha"
              autoComplete="off"
            />
            <Row>
              <Col size={6}>
                <Button color="facebook" type="button">
                  <Icon name="facebook" />
                  <span>Criar com o Facebook</span>
                </Button>
              </Col>
              <Col size={6}>
                <Button color="form">
                  <Icon name="user" />
                  <span>Criar conta</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
      <Col size={5}>
        <div style={{ padding: '30px 0' }}>
          <div>
            Você foi convidado a participar da mais inovadora ferramenta de
            mídia para micro-influenciadores nas redes sociais.
          </div>
          <br />
          <div>
            <span>Este convite expira em: </span>
            <Countdown />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Main;
