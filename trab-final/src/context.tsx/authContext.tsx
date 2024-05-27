import React, { createContext, useEffect, useState } from 'react';
import { signIn } from './auth';

type AuthState = {
    token: string | null;
    isAuthenticated: boolean;
    email: string | null; // Adicionando email ao estado de autenticação
}

type ContextType = AuthState & {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

type AuthContextProviderProps = {
    children?: React.ReactNode | undefined;
}

export const AuthCtx = createContext<ContextType | undefined>(undefined);

const AuthCtxProvider = ({ children }: AuthContextProviderProps) => {
    const [authState, setAuthState] = useState<AuthState>({ token: '', isAuthenticated: false, email: null });

    const login = async (email: string, senha: string) => {
        const token = await signIn(email, senha);
        setAuthState({ token: token, isAuthenticated: true, email: email }); // Atualiza o estado com o email
    }

    const logout = () => {
        setAuthState({ token: null, isAuthenticated: false, email: null }); // Limpa o email ao fazer logout
        console.log("Deslogado", authState.token);
    }

    useEffect(() => {
        if (authState.token === null) {
            console.log("Deslogado", authState.token);
        }
    }, [authState.token]);

    return (
        <AuthCtx.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthCtx.Provider>
    )
}

export default AuthCtxProvider;
