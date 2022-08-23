import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const { id } = useParams()

    
    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id:', product)
        return product
    }

    useEffect( () => {
        getProduct().then((res) =>{   
            setItem(res)
        })
    }, [id])


    return(
        <div className="container-item-detail">
            <h1>Detalle</h1>
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer