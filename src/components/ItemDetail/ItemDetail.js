import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';
import Categoria from '../Category/category';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ item }) => {
    const {price, title, image, stock, category, description, id} = item;
    const { addProductToCart, cartProducts } = useContext(CartContext)
    const productInCart = cartProducts.find((cartProduct) => cartProduct.id == id)
    const [counter, setCounter] = useState(1);

    const onAddItem = () => {
        addProductToCart(item, counter)
    }


    return(
        <>
            <div className="item-detail">
                <div className="item-detail-image">
                    <img src={`/assets/Items/${image}`} alt="imagen producto" />
                </div>
                <div className="item-detail-info">
                    <span className="category"><Categoria categoria={category}/></span>
                    <h2>{title}</h2>
                    <span className="info-texto">{description + ", luego de la contratación podrá especificar el modo de boosteo."}</span>
                    <ItemCount stock={stock} counter={counter} setCounter={setCounter} />
                    {
                        productInCart &&
                            <>
                                <Link to={'/'}> <button> Continuar comprando </button></Link>
                                <Link to={`/cart`}> <button>TERMINAR COMPRA</button>  </Link>
                            </>
                    }

                    {
                        counter > 0 && 
                            <>
                                <>Precio total:{price * counter}</>

                                {
                                    !productInCart && 
                                    <button onClick={onAddItem}>Agregar al carrito </button>                                   
                                }

                            </>
                    }
                </div>
            </div>
        </>
    )
}


export default ItemDetail