import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

const ItemDetail = () => {

    return(
        <>
            <div className="item-detail">
                <div className="item-detail-image">
                    <img src="/assets/Items/BronzeEmblem2022.png" alt="imagen" />
                </div>
                <div className="item-detail-info">
                    <span className="category">League Of Legends</span>
                    <h2>Bronce</h2>
                    <span className="info-texto">Liga bronce, luego de la contratación podrá especificar el modo de boosteo.</span>
                    <ItemCount className="item-detail-count"/>
                </div>
            </div>
        </>
    )
}


export default ItemDetail