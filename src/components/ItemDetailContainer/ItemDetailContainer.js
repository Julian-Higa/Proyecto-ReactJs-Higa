import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss';
import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const { id } = useParams()

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                setItem(product)
                return true;
            }
            return false;
        })
    }

    useEffect( () => {
        filterById()
    }, [id])


    return(
        <div className="container-item-detail">
            <h1>Detalle</h1>
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer