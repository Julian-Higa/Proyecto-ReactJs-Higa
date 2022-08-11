import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import ImageList from '@mui/material/ImageList';
import CartProductItem from './../CartProductItem/CartProductItem'
import {Link} from 'react-router-dom'

const Checkout = () => {
    const {totalPrice, cartProducts} = useContext(CartContext);

    return (
        <>
            <ImageList >
                {cartProducts.map((product) => (
                    <CartProductItem product={product}/>
                ))}
            </ImageList>

            {
                totalPrice != 0 ?
                <>
                    <div>
                        <h1> Precio Total: {totalPrice}</h1>
                        <h1> Finalizar compra</h1>

                        </div>
                    <div>
                        <button> Terminar compra </button> 
                    </div>       
                </>
                :
                <Link to='/'><button><h1> No hay productos en el carro</h1></button></Link>
            }
        </>
    )

}

export default Checkout