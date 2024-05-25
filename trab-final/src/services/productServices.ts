import { api } from "./api";
import ProdType from "../Types/TipoProdutos";


// Método para criar um produto
export const criarProduto = async (produto: Omit<ProdType, 'id'>) => { // Removendo a propriedade 'id'
  try {
    // Faz uma requisição post para criar o produto na colection products
    const response = await api.post(`/products.json`, produto);
    console.log("Produto foi cadastrado.", response)
  } catch (err) {
    console.log("ERRO: ", err); // Exibe um erro, se houver
  }
};

// Método para listar todos os produtos
export const listarProdutos = async () => {
  try {
    const produtos: ProdType[] =  [{
      id: '',
      nomeProd: '',
      descricao: '',
      preco: 0,
      img: '',
    }];
    ;
    // Faz uma requisição GET para a API, obtendo todos os produtos
    const response = await api.get(`/products.json`);

    // Itera sobre os produtos retornados e os adiciona a um array
    for (const key in response.data) {
      const produto = {
        ...response.data[key],
        id: key,
      };
      produtos.push(produto);
    }
    return produtos; // Retorna a lista de produtos
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log(err);
  }
};


// Método para obter um produto específico por ID
export const pegarProdutoPorId = async (productId: string) => {
  try {
    // Faz uma requisição GET para a API, obtendo os dados do produto com base no productId
    const response = await api.get(`/products/${productId}.json`);
    const produto = { ...response.data, id: productId }; // Adicionando o id ao produto
    return produto; // Retorna os dados do produto com o id
  } catch (err) {
    // Em caso de erro, lança o erro para que seja tratado no ponto de chamada do método
    throw err;
  }
};

export const deletarProduto = async(productId: string) => {

try{
  const response = await api.delete(`/products/${productId}.json`)

console.log("DELETADO COM SUCESSO: ", response)
}catch(err){
  console.log("ERRO: ",err )
}


}
