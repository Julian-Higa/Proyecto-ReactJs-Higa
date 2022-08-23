import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"


const ItemListContainer =({section}) => {
    
    const [listProducts, setListProducts] = useState([])
    const { category } = useParams();

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            console.log('producto con id:', product)
            return product 
        })
        const productListOrdenado = productList.sort( (product1, product2) => {
            if (product1.category < product2.category) return -1
            return 1
        })
        return productListOrdenado
    }


    // const getProducts = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(products)
    //     }, 2000)
    // })

    useEffect(() => {
        getProducts()
            .then( (res) => {
                if (category){
                    let filterResult = res.filter((product) => {
                        if(product.category == category){
                            return true;
                        }
                        return false;
                    })

                    setListProducts(filterResult)
                } 
                else{
                    setListProducts(res)
                }

            })
            .catch( (error) => { // Falla la respuesta
                console.log("fallo")
            })
            .finally( () => {})
    }, [category])

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}


export default ItemListContainer