import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context.tsx/cartContext";
import { Button, Card } from "react-bootstrap";
import { obterItensDoCarrinho } from "../services/cartServices";
import { getIdUsuarioPeloEmail } from "../services/userServices";
import ProdType from "../Types/TipoProdutos";
import { AuthCtx } from "../context.tsx/authContext";

const Carrinho = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const authCtx = useContext(AuthCtx);
    const [itensDoCarrinho, setItensDoCarrinho] = useState<ProdType[]>([]);

    const fetchCarrinho = async () => {
        try {
            if (authCtx?.email) {
                const userId = await getIdUsuarioPeloEmail(authCtx.email);
                if (userId) {
                    const itensCarrinho = await obterItensDoCarrinho(userId);
                    setItensDoCarrinho(itensCarrinho);
                } else {
                    console.error("ID do usuário não encontrado.");
                }
            }
        } catch (error) {
            console.error('Erro ao buscar itens do carrinho:', error);
        }
    };

    useEffect(() => {
        if (authCtx?.email) {
            fetchCarrinho();
        }
    }, [authCtx?.email]);

    const handleDelete = async (idItem: string) => {
        await removeFromCart(idItem);
        // Atualizar os itens do carrinho após a remoção
        setItensDoCarrinho(prevItens => prevItens.filter(item => item.id !== idItem));
    }

    return (
        <div style={{ marginTop: 100 }}>
            <div className="container">
                {itensDoCarrinho.map(item => (
                    <div className="card mb-3" style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: '#0B0B0F', borderColor: '#933FFE', borderRadius: 10, color: 'white' }} key={item.id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Card.Img variant="top" src={item.img} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 style={{ fontSize: 22 }} className="card-title">{item.nomeProd}</h5>
                                    <p style={{ fontSize: 28, fontWeight: 'bold' }} className="card-text">{item.preco}</p>
                                    <Button variant="primary" style={{ backgroundColor: '#898CA9', borderColor: '#898CA9' }} onClick={() => handleDelete(item.id)}>Remover</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button style={{ color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE', fontWeight: 'bold', marginTop: 50, paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 10 }} variant="secondary">Finalizar Compra!</Button>
        </div>
    );
}

export default Carrinho;
