import React from 'react';
import { useCart } from '../Context/CartContext';

function AddToCartButton({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddToCartButton;
