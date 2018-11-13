import React from 'react';
import Container from '../../components/container';
import Row from '../../components/row';
import Col from '../../components/col';
import Card from '../../components/card';
import Title from '../../components/title';
import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Link from '../../components/link';

const SignIn = () => (
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
              autoCorrect="off"
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              autoComplete="off"
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
            <br />
            <Link to="//example.com">Esqueci minha senha</Link>
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

export default SignIn;
