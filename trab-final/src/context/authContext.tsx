import React, { createContext, useState } from 'react'
import {  signIn } from '../services/auth';

type AuthState = {
    token: string | null
}

type ContextType = AuthState & {
    login: (username: string, password: string) => Promise<void>;
    logout: () => void
}

type AuthContextProviderProps = {
    children?: React.ReactNode | undefined;
  }

export const AuthCtx = createContext<ContextType|undefined>(undefined);

const AuthCtxProvider= ({children}: AuthContextProviderProps) => {
    const [authState, setAuthState] = useState<AuthState>({token: ''})

    const login = async (email: string, senha: string) => {
        const token = await signIn(email, senha)
        setAuthState({ token: token});
    }



    const logout = () => {
        setAuthState({token: null})
    }


    return( 
        <AuthCtx.Provider value={{...authState, login, logout}}>
            {children}
        </AuthCtx.Provider>
    )
}

export default AuthCtxProvider;