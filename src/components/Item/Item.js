import { useState, useEffect } from 'react'
import './Item.scss'

const Item = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {title, image, price, stock} = data

    const addNumber = () => {
        if(contador < stock)
        setContador(contador + 1)
    }
    const removeNumber = () => {
        if(contador > 0)
        setContador(contador - 1)
    }

    return(
        <div className='item'>
            <img src={`/assets/Items/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span> Por división </span>
            <span className='price'>$ {price}</span>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <p>Límite {stock} u.</p>
            <button onClick={action}>Contratar</button>
        </div>
    )
}

export default Item