/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable prettier/prettier */
import { createContext, useReducer, useContext } from 'react';

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
    case 'ADD_TO_CART': {
      const itemInCart = state.cart.find((item) => item._id === action.payload._id);
      return itemInCart
        ? {
          ...state,
          cart: state.cart.map(
            // eslint-disable-next-line no-confusing-arrow
            (item) => item._id === action.payload._id
            // eslint-disable-next-line operator-linebreak
            ?
             {...item, quantity: item.quantity + 1 }
            : item,
            ),
          total: state.total + action.payload.price,
          }
        : {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
    }
    case 'DELETE_TO_CART':
      return {
        ...state,
        cart: action.payload,
        total: 0,
    };
    case 'DELETE_ONE_TO_CART': {
      return action.payload.quantity > 1
      ? {
        ...state,
        cart: state.cart.map((item) => (item._id === action.payload._id
            ? {...item, quantity: item.quantity - 1} : item)),
        total: state.total - action.payload.price,
      }
      : {
        ...state,
        cart: state.cart.filter((item) => (item._id !== action.payload._id)),
        total: state.total - action.payload.price,
      };
    }
    case 'DELETE_ALL_TO_CART': {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
        total: state.total - (action.payload.price * action.payload.quantity),
      };
    }
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
