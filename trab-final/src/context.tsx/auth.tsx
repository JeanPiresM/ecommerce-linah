import { criarUsuario } from "../services/userServices";
import { api } from "../services/api";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_API = import.meta.env.VITE_API_URL;

const authenticate = async (mode: string, email: string, password: string) => {
  try {
    const response = await api.post(`${URL_API}${mode}?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response);
    return response.data.idToken;
  } catch (err) {
    console.log("Erro de Authenticação", err);
  }
};

export const createUser = async (
  email: string,
  password: string,
  nome: string
) => {
  try {
    const token = await authenticate("signUp", email, password);
    criarUsuario(email, nome);
    return token;
  } catch (err) {
    window.alert(`ERRO DE AUTENTICAÇÃO: ${err}`);
  }
};
export const signIn = async (email: string, password: string) => {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
};
