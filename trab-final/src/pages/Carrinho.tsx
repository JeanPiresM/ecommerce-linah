import { useContext } from "react"
import { CartContext } from "../context.tsx/cartContext"
// import { criarProduto } from "../services/productServices"
import { Button, Card } from "react-bootstrap"


const Carrinho = () => {

    const { cart, removeFromCart } = useContext(CartContext)




    return (

        <div style={{ marginTop: 100 }}>
        <div className="container" >
          {cart.map(item => (
            <div className="card mb-3" style={{ maxWidth: '450px', margin: '0 auto', backgroundColor: '#0B0B0F', borderColor: '#933FFE', borderRadius: 10, color: 'white' }} key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Card.Img variant="top" src={item.img} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 style={{fontSize: 22}} className="card-title">{item.nomeProd}</h5>
                    <p  style={{fontSize: 28, fontWeight: 'bold'}} className="card-text">
                    {item.preco}
                    </p>
                    <Button variant="primary" style={{backgroundColor:'#898CA9', borderColor: '#898CA9'}} onClick={() => removeFromCart(item.id)}>
                      Remover
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button style={{color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE', fontWeight: 'bold', marginTop: 50, paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 10}} variant="secondary">Finalizar Compra!</Button>
      </div>



        //     <ul>
        //         {cart.map(item => (
        //             <>

        //                 <li key={item.id}>{item.nomeProd}</li>
        //                 <button onClick={() => removeFromCart(item.id)}>Remover</button>
        //             </>
        //         ))}
        //     </ul>
        //     <button onClick={() => criarProduto({
        //         descricao: "",
        //         img: "",
        //         nomeProd: "",
        //         preco: 0
        //     })}>produto</button>
        // </div>
    )
}
export default Carrinho