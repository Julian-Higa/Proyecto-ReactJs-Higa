import {useState , useContext} from 'react'
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import ImageList from '@mui/material/ImageList';
import CartProductItem from './../CartProductItem/CartProductItem'
import './CartWidgets.scss'
import CartWithCounter from './../CartWithCounter/CartWithCounter'

const CartWidgets = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, totalPrice, totalProducts, qty } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return( 
        <>
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            <CartWithCounter onClick={handleClick} qty={qty} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >

                <ImageList >
                    {cartProducts.map((product) => (
                       <CartProductItem product={product}/>
                    ))}
                </ImageList>
                {
                    totalPrice != 0 ?
                    <>
                        <div>
                            <h1> Precio Total: {totalPrice}</h1>

                        </div>
                        <div>
                            <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>
                            <Link to='/cart'> <button> Terminar compra </button> </Link>
                        </div>
                    </>
                    :
                    <h1> No hay productos en el carro</h1>
                }
            </Menu>
        </>        
    )
}




export default CartWidgets