import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart: React.FC = () => {
    const { cartItems, total, removeFromCart } = useCart();

    return (
        <div className="cart">
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>Precio: ${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;