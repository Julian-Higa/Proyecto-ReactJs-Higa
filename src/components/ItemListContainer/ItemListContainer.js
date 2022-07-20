//import { useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer =({section}) => {
    const product1 = {
        title: "Hierro",
        price: 1500,
        image: 'IronEmblem2022.png',
        stock: 4
    }
    const product2 = {
        title: "Bronce",
        price: 2000,
        image: 'BronzeEmblem2022.png',
        stock: 4
    }
    const product3 = {
        title: "Plata",
        price: 3500,
        image: 'SilverEmblem2022.png',
        stock: 4
    }
    const product4 = {
        title: "Oro",
        price: 4500,
        image: 'GoldEmblem2022.png',
        stock: 4
    }
    const product5 = {
        title: "Platino",
        price: 5500,
        image: 'PlatinumEmblem2022.png',
        stock: 4
    }
    const product6 = {
        title: "Diamante",
        price: 7000,
        image: 'DiamondEmblem2022.png',
        stock: 4
    }
    const product7 = {
        title: "Master",
        price: 8500,
        image: 'MasterEmblem2022.png',
        stock: 2
    }
    const product8 = {
        title: "Grand Master",
        price: '10000',
        image: 'GrandMasterEmblem2022.png',
        stock: 3
    }
    const product9 = {
        title: "Challenger",
        price: 12000,
        image: 'ChallengerEmblem2022.png',
        stock: 1
    }

    const handleSubmit = () => {console.log("Envio de info")}

    return(
        <div className= 'list-products'>
            <h2>{section}</h2>
          <ItemProduct data={product1} action={handleSubmit}/>
          <ItemProduct data={product2}/>
          <ItemProduct data={product3}/>
          <ItemProduct data={product4}/>
          <ItemProduct data={product5}/>
          <ItemProduct data={product6}/>
          <ItemProduct data={product7}/>
          <ItemProduct data={product8}/>
          <ItemProduct data={product9}/>
        </div>
    )
}

export default ItemListContainer