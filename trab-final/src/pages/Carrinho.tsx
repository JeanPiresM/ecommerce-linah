import { useContext } from "react"
import { CartContext } from "../context.tsx/cartContext"
import { criarProduto } from "../services/productServices"


const Carrinho = () => {

    const { cart, removeFromCart } = useContext(CartContext)




    return (
        <div>
            <ul>
                {cart.map(item => (
                    <>
                        <li key={item.id}>{item.nomeProd}</li>
                        <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </>
                ))}
            </ul>
            <button onClick={() => criarProduto({
                descricao: "",
                img: "",
                nomeProd: "",
                preco: 0
            })}>produto</button>
        </div>
    )
}
export default Carrinho