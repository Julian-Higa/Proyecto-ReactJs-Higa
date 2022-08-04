import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from "react-router-dom"

const ItemListContainer =({section}) => {
    
    const [listProducts, setListProducts] = useState([])
    const { category } = useParams();

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
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