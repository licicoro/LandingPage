import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;