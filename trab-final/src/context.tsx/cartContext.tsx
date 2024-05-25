import React, { createContext, useContext, useState } from 'react';
import ProdType from '../Types/TipoProdutos';

// Definição do tipo para um item do carrinho

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
export const CartProvider  = ({ children }: CartContextProviderProps) => {
    const [cart, setCart] = useState<ProdType[]>([]);

    const addToCart = (item: ProdType) => {
        setCart([...cart, item]);
        console.log("ITEM: ", item)
    };

    const removeFromCart = (itemId: string ) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para utilizar o contexto
export default CartProvider;
