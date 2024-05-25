import UserType from '../Types/TipoUsuario';
import { api } from './api'

export const criarUsuario = async (dadosUsuario: UserType) => {
  try {
    // Enviar requisição POST para criar o usuário
    const response = await api.post('/usuarios', dadosUsuario);

    // Extrair e retornar o ID do usuário criado a partir da resposta da API
    const idUsuario = response.data.id;

    return idUsuario;
  } catch (err) {
    // Se houver algum erro na requisição, você pode tratar aqui
    console.error("Erro ao criar usuário:", err);
    throw err; // Lançar o erro para ser tratado em algum outro lugar
  }
};



// Método para obter um produto específico por ID
export const pegarPorId = async (userId: string) => {
  try {
    // Faz uma requisição GET para a API, obtendo os dados do produto com base no userId
    const resp = await api.get(`/usuarios/${userId}.json`);
    return resp.data; // Retorna os dados do produto
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log("ERRO: ", err);
  }
};