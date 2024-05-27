import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { createUser } from '../context.tsx/auth';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

const navigate = useNavigate()


  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      // Aqui você pode adicionar a lógica para enviar os dados de cadastro para o servidor
    const func =  await createUser(email, password, nome);
      console.log("Email:", email);
      console.log(func)
      console.log("Password:", password);
      alert("Cadastrado com sucesso!")
      navigate("/login");
      setNome('')
      setEmail('')
      setPassword('')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: 100 }} className="register-container">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <div className="register-form">
              <h2 style={{textAlign:"center", color: 'white', fontSize: 60, fontWeight: 'bold', marginTop: 100}} className="text-center mb-4">Cadastro</h2>
              <Form onSubmit={handleSubmit}>
              <Form.Group style={{marginBottom: 20, marginTop: 100}} controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Nome do usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group style={{marginBottom: 20, marginTop: 100}} controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                  />
                </Form.Group>

                <Form.Group style={{marginBottom: 50}} controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-3"
                  />
                </Form.Group>


                <Button style={{backgroundColor: '#933FFE'}} variant="primary" type="submit" className="w-100">
                  Cadastrar
                </Button>
              </Form>
            </div>
            <p style={{color: 'white'}} className="text-center mt-3">Já tem uma conta? <a style={{color: '#898CA9'}} href="/login">Entre agora!</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;