import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    
    // Simulated product data, in a real app this would be fetched from an API
    const product: Product = {
        id: id,
        name: 'Sample Product',
        price: 29.99,
        description: 'This is a sample product description.',
        image: 'https://via.placeholder.com/150'
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;