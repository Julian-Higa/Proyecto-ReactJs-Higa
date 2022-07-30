import { useState } from "react";
import './ItemCount.scss';



const ItemCount = ({stock}) => {
    
    const [contador, setContador] = useState(1)

    const addNumber = () => {
        if(contador < stock)
        setContador(contador + 1)
    }
    const removeNumber = () => {
        if(contador > 0)
        setContador(contador - 1)
    }

    return(
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
    )
}

export default ItemCount