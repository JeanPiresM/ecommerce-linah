import React, { useContext, useState } from 'react';
import { Container} from 'react-bootstrap';
 import { AuthCtx } from '../context/authContext';
import { createUser } from '../services/auth';
import { criarUsuario } from '../services/usuarioServices';

const Login: React.FC = () => {
  const [email, setEmail] = useState<any>('');
  const [senha, setSenha] = useState<any>('');
  const [nome, setNome] = useState<any>('');

const {login} = useContext(AuthCtx)

  return (
    <div className="login-container">
      <Container>
        <form action="onSubmit">
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="text" placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <button type='button' onClick={() =>  createUser(email, senha)}>enviar</button>
        </form>
      </Container>
    </div>
  );
};

export default Login;