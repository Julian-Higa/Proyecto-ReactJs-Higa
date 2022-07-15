import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer =({section}) => {
    return(
        <div className= 'list-products'>
            <h2>{section}</h2>
          <ItemProduct title= "Hierro" price={1500} image={'IronEmblem2022.png'}/>
          <ItemProduct title= "Bronce" price={2000} image={'BronzeEmblem2022.png'}/>
          <ItemProduct title= "Plata" price={3500} image={'SilverEmblem2022.png'}/>
          <ItemProduct title= "Oro" price={4500} image={'GoldEmblem2022.png'}/>
          <ItemProduct title= "Platino" price={5500} image={'PlatinumEmblem2022.png'}/>
          <ItemProduct title= "Diamante" price={7000} image={'DiamondEmblem2022.png'}/>
          <ItemProduct title= "Master" price={8500} image={'MasterEmblem2022.png'}/>
          <ItemProduct title= "Grand Master" price= {10000} image={'GrandMasterEmblem2022.png'}/>
          <ItemProduct title= "Challenger" price= {12000} image={'ChallengerEmblem2022.png'}/>
        </div>
    )
}

export default ItemListContainer