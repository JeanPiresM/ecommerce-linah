import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { criarProduto } from "../services/productServices"


const Carrinho = () => {

    const { cart, removeFromCart } = useContext(CartContext)




    return (
        <div>
            <ul>
                {cart.map(item => (
                    <>
                    {/*Produtos listados dentro do carrinho*/}
                        <li key={item.id}>{item.nomeProd}</li>
                        {/*Botão com uma função vinda do context para remover o item do carrinho*/}
                        <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </>
                ))}
            </ul>
            <button onClick={() => criarProduto({
                nomeProd: "Camiseta Dark Dragon and Blue Monster",
                descricao: "Utilizamos na confecção de nossas camisetas meia malha 100% algodão fio 30 penteada. Estampamos cada uma a mão, usando tinta a base de água, garantindo maior qualidade e durabilidade para você!",
                preco: 109.90,
                img: "https://acdn.mitiendanube.com/stores/001/078/806/products/1-2dc7c8d02c279d5c7517163372345620-1024-1024.webp"

            })}>produto</button>
        </div>
    )
}
export default Carrinho