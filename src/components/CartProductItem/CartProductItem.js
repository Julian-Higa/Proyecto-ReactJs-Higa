import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './CartProductItem.scss'

const CartProductItem = ({product}) => {
    const {deleteProduct, addProductToCart, cartProducts} = useContext(CartContext);
    

    const {quantity} = cartProducts.find((cartProduct) => cartProduct.id == product.id)
    const changeProductAmount = (counter) => {
        if (counter == 0){
            deleteProduct(product)
        } 
        else{
            addProductToCart(product, counter)
        }
        

    }
    
    return (
        <>
            <ImageListItem key={product.id}>
                <img
                    style={{objectFit: 'contain', width: '300px',height: '300px'}}
                    src={`/assets/Items/${product.image}`}
                    alt={product.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={product.title}
                    subtitle={<ItemCount stock={product.stock} counter={quantity} setCounter={changeProductAmount} />}
                    actionIcon={
                        <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${product.title}`}
                        onClick={() => deleteProduct(product)}
                        >
                            <i class="fa fa-trash" aria-hidden="true" ></i>
                        </IconButton>
                    }
                />
            </ImageListItem>
        </>
    )
} 


export default CartProductItem