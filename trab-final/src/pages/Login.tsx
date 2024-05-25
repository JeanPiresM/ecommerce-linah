import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import { login } from '../context.tsx/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  return (
    <div className="login-container">
      <Container>
        <form action="onSubmit">

          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type='button' onClick={() => login(email, senha)}>enviar</button>

        </form>
      </Container>
    </div>
  );
};

export default Login;