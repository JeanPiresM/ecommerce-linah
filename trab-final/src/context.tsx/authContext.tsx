import { createContext, useState } from 'react'
import { login } from './auth';

type AuthContextProviderProps = {
    children?: React.ReactNode | undefined;
  };

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    signin: () => {},
    logout: () => {},
})

const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    const [token, setToken] = useState(null)

    const signin = async (email: string, senha: string) => {
        const userToken = await login(email, senha)
        setToken(userToken)
        return userToken
    }
    const logout = () => {
        setToken(null)
    }


    const value={
        token: token,
        isAuthenticated: !!token,
        signin: signin,
        logout: logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider