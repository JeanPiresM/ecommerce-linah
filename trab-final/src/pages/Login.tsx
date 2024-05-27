import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthCtx } from "../context.tsx/authContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const authContext = useContext(AuthCtx);
 
  if (!authContext) {
    throw new Error('Login must be used within an AuthCtxProvider');
  }

    const { login } = authContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && senha) {
      login(email, senha)
        .then(() => {
          console.log("Login bem sucedido!");
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Por favor, preencha todos os campos.");
    }
  };


  return (
    <div style={{ marginTop: 100 }} className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 60,
                fontWeight: "bold",
                marginTop: 100,
              }}
              className="text-center mb-4"
            >
              Bem-vindo de volta!
            </h2>
            {errorMessage && (
              <p className="text-danger text-center">{errorMessage}</p>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group
                style={{ marginBottom: 20, marginTop: 100 }}
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                style={{ marginBottom: 50 }}
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#933FFE" }}
                variant="primary"
                type="submit"
                className="w-100"
              >
                Entrar
              </Button>
            </Form>
            <p style={{ color: "white" }} className="text-center mt-3">
              Ainda não tem uma conta?{" "}
              <a style={{ color: "#898CA9" }} href="/register">
                Registre-se aqui
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    // <div style={{marginTop: 100}} className="login-container">
    //   <Container>
    //     <form action="onSubmit">

    //       <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    //       <input type="text" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
    //       <button type='button' onClick={() => login(email, senha)}>enviar</button>

    //     </form>
    //   </Container>
    // </div>
  );
};

export default Login;
