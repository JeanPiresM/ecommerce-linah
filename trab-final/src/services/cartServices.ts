import { api } from "./api";
import ProdType from "../Types/TipoProdutos";

// Método para criar um carrinho para o usuário
export const criarCarrinho = async (idUsuario: string) => {
  try {
    // Envia uma requisição POST para criar o carrinho para o usuário
    const response = await api.post(`/usuarios/${idUsuario}/carrinho.json`, {});
    
    // Retorna o ID do carrinho criado
    return response.data.idCarrinho;
  } catch (err) {
    // Em caso de erro, exibe e lança o erro
    console.error("Erro ao criar carrinho:", err);
    throw err;
  }
};

// Método para adicionar um produto ao carrinho do usuário
export const adicionarProdutoAoCarrinho = async (idCarrinho: string, idProduto: string, quantidade: number) => {
  try {
    // Envia uma requisição POST para adicionar o produto ao carrinho
    await api.post(`/carrinhos/${idCarrinho}/produtos`, {
      idProduto,
      quantidade
    });
  } catch (err) {
    // Em caso de erro, exibe e lança o erro
    console.error("Erro ao adicionar produto ao carrinho:", err);
    throw err;
  }
};

// Método para obter os produtos do carrinho do usuário
export const getCarrinho = async (idUsuario: string, idCarrinho: string): Promise<ProdType[]> => {
  try {
    // Faz uma requisição GET para obter os produtos do carrinho do usuário
    const response = await api.get(`/usuarios/${idUsuario}/carrinho/${idCarrinho}.json`);
    
    // Mapeia os produtos obtidos, garantindo que cada um tenha um ID único
    const produtos: ProdType[] = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    
    // Retorna os produtos do carrinho
    return produtos;
  } catch (error) {
    // Em caso de erro, exibe e lança o erro
    console.error("Erro ao buscar produtos:", error);
    throw new Error("Erro ao buscar produtos");
  }
};

// Método para retirar um produto do carrinho do usuário
export const retirarProdutoDoCarrinho = async (idUsuario: string, idCarrinho: string) => {
  try {
    // Envia uma requisição DELETE para remover o carrinho do usuário
    const response = await api.delete(`usuarios/${idUsuario}/carrinho/${idCarrinho}.json`);
    console.log(response);
  } catch (err) {
    // Em caso de erro, exibe e lança o erro
    console.log("ERRO: ", err);
    throw err;
  }
};

// Método para atualizar a quantidade de um produto no carrinho (não implementado)
export const atualizarQuantidadeProduto = async (idCarrinho: string, idProduto: string, novaQuantidade: number) => {
  try {
    // Envia uma requisição PUT para atualizar a quantidade do produto no carrinho
    await api.put(`/carrinhos/${idCarrinho}/produtos/${idProduto}`, {
      quantidade: novaQuantidade
    });
  } catch (err) {
    // Em caso de erro, exibe e lança o erro
    console.log("ERRO: ", err);
    throw err;
  }
};
