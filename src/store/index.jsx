import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  cart: [],
  products: [],
  total: 0,
  isloading: false,
  error: null,
};

function reduce(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const store = {
    state,
    dispatch,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a Provider');
  }
  return context;
};
