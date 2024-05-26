import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthCtx } from '../context/authContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [nome, setNome] = useState<string>('');

    const authContext = useContext(AuthCtx);

    if (!authContext) {
        throw new Error('Login must be used within an AuthCtxProvider');
    }

    const { login, logout } = authContext;

    const handleLogin = async () => {
        await login(email, senha);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previna o comportamento padrão do formulário
        handleLogin();
    };

    return (
        <div className="login-container">
            <Container>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
                <button onClick={logout}>logout</button>
            </Container>
        </div>
    );
};

export default Login;
