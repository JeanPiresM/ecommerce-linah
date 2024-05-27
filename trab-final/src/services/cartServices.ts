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
  

 // Função para obter os itens do carrinho do usuário
export const obterItensDoCarrinho = async (userId: string) => {
  try {
      const response = await api.get(`/users/${userId}/carrinho/produtos.json`);
      console.log('Resposta da API ao obter itens do carrinho:', response); // Log completo da resposta da API
      console.log('Status da resposta:', response.status); // Log do status da resposta
      console.log('Cabeçalhos da resposta:', response.headers); // Log dos cabeçalhos da resposta

      if (response.data) {
          const produtos = response.data;
          console.log('Produtos do carrinho:', produtos); // Log dos produtos do carrinho

          // Verificar se os produtos são um array
          if (Array.isArray(produtos)) {
              return produtos;
          } else {
              console.error('Os produtos do carrinho não estão em um formato válido:', produtos);
          }
      }
      return [];
  } catch (error) {
      console.error('Erro ao obter itens do carrinho:', error); // Log do erro
      throw error;
  }
};

export const removerItemDoCarrinho = async (userId: string, itemId: string) => {
  try {
    // Obter os itens do carrinho do usuário
    const itensCarrinho = await obterItensDoCarrinho(userId);

    // Verificar se o array de itens do carrinho existe e não está vazio
    if (itensCarrinho && itensCarrinho.length > 0) {
      // Filtrar o array de itens, removendo o item com o ID especificado
      const novosItensCarrinho = itensCarrinho.filter(item => item.id !== itemId);

      // Atualizar o campo 'carrinho.produtos' no documento do usuário com os novos itens
      await api.patch(`/users/${userId}/carrinho.json`, { produtos: novosItensCarrinho });

      console.log("Item removido do carrinho:", itemId);
    } else {
      console.error("Nenhum item encontrado no carrinho ou carrinho não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao remover item do carrinho:", error);
    throw error;
  }
};
