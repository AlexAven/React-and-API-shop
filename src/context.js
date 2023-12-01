import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: [],
    alertName: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    
    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    };

    value.deleteFromCart = (itemId) => {
        dispatch({type: 'DELETE_FROM_CART', payload: {mainId: itemId}})
    };

    value.handleBasketShow = () =>  {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    };

    value.increaseQuantity = (itemId) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: {mainId: itemId}})
    };

    value.decreaseQuantity = (itemId) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: {mainId: itemId}})
    };

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    };

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
};