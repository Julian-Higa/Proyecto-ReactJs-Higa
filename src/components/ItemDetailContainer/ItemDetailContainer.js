import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemListContainer.scss';
import products from "../../utils/products.mock";
import { useEffect } from "react";

const ItemDetailContainer = () => {
    useEffect( () => {
        if(products.some( )){

        }
    
    }, [])

    return(
        <div className="container-item-detail">
            <h1>Detalle</h1>
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer