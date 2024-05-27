import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { AuthCtx } from "../context/authContext";
import { getIdUsuarioPeloEmail } from "../services/usuarioServices";
import { obterItensDoCarrinho } from "../services/cartServices";
import ProdType from "../Types/TipoProdutos";

const Carrinho = () => {
  const authCtx = useContext(AuthCtx);
  const { removeFromCart } = useContext(CartContext);
  const [itensDoCarrinho, setItensDoCarrinho] = useState<ProdType[]>([]);


  

    const fetchCarrinho = async () => {
      let itensTeste;

      try {
        const userId = await getIdUsuarioPeloEmail(authCtx?.email);

        if (userId) {
          const itensCarrinho = await obterItensDoCarrinho(userId);

          itensTeste = itensCarrinho;

          console.log("TESTE COM VARIAVEL NORMAL: ", itensTeste)


          if (itensCarrinho && Array.isArray(itensCarrinho)) {
            setItensDoCarrinho(itensCarrinho);
          } else {
            console.error("Nenhum item encontrado no carrinho:", itensCarrinho);
          }
        } else {
          console.error("ID do usuário não encontrado.");
        }
      } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
      }
    };
useEffect(() => {
  if (authCtx?.email) {
    fetchCarrinho();
  }
}, [])
 




  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {itensDoCarrinho.length > 0 ? (
          itensDoCarrinho.map((item, index) => (
            <li key={index}>
              {item.nomeProd} - Preço: R$ {item.preco}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </ul>
    </div>
  );
};

export default Carrinho;
