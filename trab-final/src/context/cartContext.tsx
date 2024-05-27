import React, { createContext, useState, useContext } from 'react';
import ProdType from '../Types/TipoProdutos';
import { AuthCtx } from './authContext'; // Importe o contexto de autenticação
import { adicionarProdutoAoCarrinho, removerItemDoCarrinho } from '../services/cartServices';
import { getIdUsuarioPeloEmail } from '../services/usuarioServices';

// Definição do tipo para o contexto do carrinho
interface CartContextType {
    cart: ProdType[];
    addToCart: (item: ProdType) => void;
    removeFromCart: (itemId: string) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { }
});

type CartContextProviderProps = {
    children?: React.ReactNode | undefined;
};


// Componente Provider do Contexto
export const CartProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<ProdType[]>([]);
    const authCtx = useContext(AuthCtx); // Obtém o estado de autenticação

    const addToCart = (item: ProdType) => {
        console.log("Email do usuário:", authCtx?.email);
        setCart([...cart, item]);
        if (authCtx?.isAuthenticated) {
            if (authCtx.email) {
                adicionarProdutoAoCarrinho(authCtx.email, item)
                console.log("ITEM: ", item);
            } else {
                console.log("O email do usuário está indefinido ou nulo.");
            }
        } else {
            console.log("Usuário não autenticado. O produto não foi adicionado ao carrinho.");
        }
    };
    

    const removeFromCart = async(itemId: string) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        const idPeloEmail = await getIdUsuarioPeloEmail(authCtx?.email)
        removerItemDoCarrinho(idPeloEmail,itemId)
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
