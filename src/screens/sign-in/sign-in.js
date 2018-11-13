import React, { Component } from 'react';
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
import { signIn } from '../../api';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (email && password) {
      signIn(email, password)
        .then(res => {
          alert('Login efetuado com sucesso!');
          console.log(res.data);
        })
        .catch(e => {
          console.error(e);
          alert('Falha ao efetuar login!');
        });
    }
  }

  render() {
    return (
      <Container>
        <Row reverse>
          <Col size={7}>
            <Card>
              <Title style={{ textAlign: 'center' }}>
                Sua primeira tarefa é preencher seus dados de acesso:
              </Title>
              <Form onSubmit={this.handleSubmit}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  autoCorrect="off"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  autoComplete="off"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
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
              Você foi convidado a participar da mais inovadora ferramenta de
              mídia para micro-influenciadores nas redes sociais.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
