import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';
import Categoria from '../Category/category';


const ItemDetail = ({ item }) => {
    const {price, title, image, stock, category, description} = item;

    const [counter, setCounter] = useState(1);


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
                        counter > 0 ? 
                            <>
                                <>Precio total:{price * counter}</>
                                <Link to={`/cart`}> <button>TERMINAR COMPRA</button>  </Link>
                            </>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}


export default ItemDetail