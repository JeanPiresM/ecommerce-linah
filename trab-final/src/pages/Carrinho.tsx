import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { AuthCtx } from "../context/authContext";
import { getIdUsuarioPeloEmail } from "../services/usuarioServices";
import { obterItensDoCarrinho } from "../services/cartServices";
import ProdType from "../Types/TipoProdutos";

const Carrinho = () => {
  const authCtx = useContext(AuthCtx);
  const { removeFromCart } = useContext(CartContext);
  const [itensDoCarrinho, setItensDoCarrinho] = useState<ProdType[]>([]);

  useEffect(() => {
    const fetchCarrinho = async () => {
        try {
            // 1. Verifique se o email está sendo passado corretamente
            console.log("Email do usuário:", authCtx?.email);
            
            const resp = await getIdUsuarioPeloEmail(authCtx?.email);
            
            if (resp) {
                // 2. Verifique se a resposta da API está retornando corretamente
                console.log("Resposta da API:", resp);
                
                if (resp.data) {
                    // 3. Trate erros de forma adequada
                    if (resp.data.id) {
                        // 4. Verifique se o ID do usuário está sendo retornado corretamente
                        console.log("ID do usuário:", resp.data.id);
                        
                        const itensCarrinho = await obterItensDoCarrinho(resp.data.id);
                        setItensDoCarrinho(itensCarrinho);
                    } else {
                        console.error("ID do usuário não encontrado na resposta da API.");
                    }
                } else {
                    console.error("Dados do usuário não encontrados na resposta da API.");
                }
            } else {
                console.error("Resposta da API vazia.");
            }
        } catch (error) {
            // 3. Trate erros de forma adequada
            console.error('Erro ao buscar itens do carrinho:', error);
        }
    };

    fetchCarrinho();
}, [authCtx?.email]);

  return (
    <div>
      <ul>
        {itensDoCarrinho.map((item, index) => (
          <li key={index}>
            {item.nomeProd} - Preço: R$ {item.preco}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
