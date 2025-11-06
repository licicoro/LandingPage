import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Product } from '../types';

const useCart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const getTotal = () => {
        return cartItems.reduce((total: number, item: Product) => total + item.price * item.quantity, 0);
    };

    return {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
    };
};

export default useCart;