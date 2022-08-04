import { useState, useEffect } from 'react'
import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({data, action}) => {

    const {title, image, price, stock, id} = data;
    const [counter, serCounter] = useState(0);


    return(
        <div className='item'>
            <Link to={`/item/${id}`}>
                <img src={`/assets/Items/${image}`} alt="Imagen producto" />
            </Link>
            <p>{title}</p>
            <span> Por división </span>
            <span className='price'>$ {price}</span>
            <div className='countProd'>
                <ItemCount stock={stock} counter={counter} setCounter={serCounter} />
            </div>
            <p>Límite {stock} u.</p>
            <button onClick={action}>Contratar</button>
        </div>
    )
}

export default Item