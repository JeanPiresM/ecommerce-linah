import ProdType from "../Types/TipoProdutos";
import { api } from "./api";

export const adicionarProdutoAoCarrinho = async (emailUser: string | null, produto: ProdType) => {
    try {
      // Substitui pontos por sublinhados para usar como chave
      const chave = emailUser?.replace(/\./g, '_');
  
      // Consulta o ID associado ao e-mail no nó emailToId
      const idResponse = await api.get(`/emailToId/${chave}.json`);
      const userId = idResponse.data;
  
      if (!userId) {
        console.log("Nenhum ID encontrado para o e-mail fornecido.");
        return;
      }
  
      // Recupera os dados do usuário pelo userId
      const userResponse = await api.get(`/users/${userId}.json`);
      const user = userResponse.data;
  
      if (user && user.carrinho) {
        // Adiciona o novo produto ao array de produtos do carrinho
        const novosProdutos = user.carrinho.produtos ? [...user.carrinho.produtos, produto] : [produto];
  
        // Atualiza o campo 'carrinho.produtos' no documento do usuário
        await api.patch(`/users/${userId}/carrinho.json`, { produtos: novosProdutos });
        console.log("Produto adicionado ao carrinho:", novosProdutos);
      } else {
        console.log("Carrinho não encontrado para o usuário.");
      }
    } catch (err) {
      console.log("ERRO AO ADICIONAR PRODUTO AO CARRINHO: ", err);
    }
  };
  

  export const obterItensDoCarrinho = async (userId: string) => {
    try {
      const response = await api.get(`/users/${userId}/carrinho/produtos.json`);
      const carrinho = response.data;
  
      if (carrinho && carrinho.produtos) {
        // Retorna os itens do carrinho
        return carrinho.produtos;
      } else {
        console.log("Carrinho vazio para este usuário.");
        return [];
      }
    } catch (error) {
      console.error("Erro ao obter itens do carrinho:", error);
      throw error;
    }
  };
  
