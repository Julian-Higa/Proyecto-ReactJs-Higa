import { useState } from "react";
import './ItemCount.scss';



const ItemCount = ({stock, initial, onAdd }) => {
    
    const [contador, setContador] = useState(initial)

    const addNumber = () => {
        if(contador < stock + 1)
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
                <button onClick={onAdd}>Terminar compra</button>
            </div>
    )
}

export default ItemCount