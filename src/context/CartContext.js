import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [qty, setqty] = useState(0)

    const addProductToCart = (product, quantity) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id);
        let { price } = product;
        if (isInCart){
            // En caso de que este el producto reemplazo la cantidad
            let index = cartProducts.findIndex(cartItem => cartItem.id == product.id);
            let oldQuantity = cartProducts[index].quantity;
            setTotalPrice(totalPrice => totalPrice + (quantity - oldQuantity)* price);
            setCartProducts(cartProducts => {
                cartProducts[index].quantity = quantity;
                return cartProducts;
            });

            setqty(qty => qty - oldQuantity + quantity)
        }
        else{
            // Si no esta lo agrego junto a su cantidad
            setCartProducts(cartProducts => [...cartProducts, {...product, quantity}]);
            setTotalPrice(totalPrice => totalPrice + (price * quantity));
            setqty(qty => qty + quantity)
        }
    }   
    const deleteProduct = (product) => {
        let {price, quantity} = cartProducts.find((cartProduct) => cartProduct.id == product.id) 
        setTotalPrice(totalPrice => totalPrice - (price*quantity))
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
        setqty(qty => qty - quantity)
    }
    const clear = () => {
        setCartProducts([])
        setTotalPrice(0)
        setqty(0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        clear,
        addProductToCart,
        totalPrice,
        qty
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }