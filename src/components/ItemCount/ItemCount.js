import './ItemCount.scss';



const ItemCount = ({stock, counter, setCounter }) => {

    const addNumber = () => {
        if(counter < stock)
        setCounter(counter + 1)
    }
    const removeNumber = () => {
        if(counter > 0)
        setCounter(counter - 1)
    }

    return(
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </div>
    )
}

export default ItemCount