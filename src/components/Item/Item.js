import { useState, useEffect } from 'react'
import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({data, action}) => {

    const {title, image, price, stock} = data;

    const onAdd = () => {
        alert('on add function');
    };

    return(
        <div className='item'>
            <img src={`/assets/Items/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span> Por división </span>
            <span className='price'>$ {price}</span>
            <div className='countProd'>
                <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
            </div>
            <p>Límite {stock} u.</p>
            <button onClick={action}>Contratar</button>
        </div>
    )
}

export default Item