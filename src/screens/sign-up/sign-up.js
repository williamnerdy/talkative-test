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
import Countdown from '../../components/countdown';
import { signUp } from '../../api';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password1: '',
      password2: ''
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
    const { email, password1, password2 } = this.state;

    if (password1 === password2) {
      if (email && password1) {
        signUp('Lorem Ipsum', email, password1)
          .then(res => {
            alert('Cadastro realizado com sucesso!');
            console.log(res.data);
          })
          .catch(e => {
            console.error(e);
            alert('Falha ao realizar cadastro!');
          });
      }
    } else {
      alert('As senhas precisam ser iguais!');
    }
  }

  render() {
    return (
      <Container>
        <Row reverse>
          <Col size={7}>
            <Card>
              <Title style={{ textAlign: 'center' }}>
                Para validar seu convite é preciso cadastrar os seguintes dados:
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
                  name="password1"
                  type="password"
                  placeholder="Escolha sua senha"
                  autoComplete="off"
                  required
                  value={this.state.password1}
                  onChange={this.handleChange}
                />
                <Input
                  name="password2"
                  type="password"
                  placeholder="Confirme sua senha"
                  autoComplete="off"
                  required
                  value={this.state.password2}
                  onChange={this.handleChange}
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
  }
}

export default SignUp;
