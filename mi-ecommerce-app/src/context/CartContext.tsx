import React, { createContext, useContext, useReducer } from 'react';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART';
  payload?: CartItem;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.payload!];
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
      return { items: updatedItems, total: updatedTotal };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload!.id);
      const newTotal = filteredItems.reduce((acc, item) => acc + item.price, 0);
      return { items: filteredItems, total: newTotal };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);