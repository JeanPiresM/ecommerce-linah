import { useEffect, useState } from 'react'
import ProdType from '../Types/TipoProdutos'
import { criarProduto, editarProduto } from '../services/productServices';

const Products = () => {
  const [produtos, setProdutos] = useState<ProdType[]>([]);

 



  return (
    <>
      <h1>Produtos</h1>
      {produtos.map((item, index) => (
        <div key={index}>
          <h1>{item.nomeProd}</h1>
          <h3>{item.preco}</h3>
        </div>
      ))}
      <button onClick={() => criarProduto({
nomeProd:"Cropped Shining Nightmare",
preco: 69.90,
descricao:"Utilizamos na confecção de nossas camisetas meia malha 100% algodão fio 30 penteada. Estampamos cada uma a mão, usando tinta a base de água, garantindo maior qualidade e durabilidade para você!",
img: "https://acdn.mitiendanube.com/stores/001/078/806/products/1-950025ea0a538b3c8c17007479861624-1024-1024.webp"
      })}>Criar carrinho</button>
    </>
  )
}

export default Products;
