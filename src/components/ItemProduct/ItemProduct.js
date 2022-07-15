import './ItemProduct.scss'

const ItemProduct = ({title, price, image}) => {

    return(
        <div className='item-product'>
            <img src={`/assets/Items/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span> Por división </span>
            <span className='price'>$ {price}</span>
            <button>Contratar</button>
        </div>
    )
}

export default ItemProduct