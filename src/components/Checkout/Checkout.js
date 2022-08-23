import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import ImageList from '@mui/material/ImageList';
import CartProductItem from './../CartProductItem/CartProductItem'
import {Link} from 'react-router-dom'
import Modal from './../Modal/Modal'
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'


const Checkout = () => {
    const {totalPrice, cartProducts, clear} = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        let order={        
            items: cartProducts.map((product) => {
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price
                }
            } ),
            buyer: {},
            date: new Date().toLocaleString(),
            total: totalPrice
        }
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        if(orderDoc.id) clear()
    }

    return (
        <>
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
                        <h1> Finalizar compra</h1>

                        </div>
                    <div>
                        <button onClick={handleOpen}> Terminar compra </button> 
                    </div>       
                </>
                :
                <Link to='/'><button><h1> No hay productos en el carro</h1></button></Link>
            }
            {open && <Modal title="Ultimo paso" handleClose={handleClose}>
            {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button type="submit">Enviar</button>
                            </form>
                        )}
            </Modal>}
        </>
    )

}

export default Checkout