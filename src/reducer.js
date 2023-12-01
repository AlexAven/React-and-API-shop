export function reducer(state, {type, payload}) {
    switch(type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            };
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(element => element.mainId === payload.mainId)
        
            let newOrder = null;
        if (itemIndex < 0) {
            const newItem = {
                ...payload,
                quantity: 1,
            };
            newOrder = [...state.order, newItem];
        } else {
            newOrder = state.order.map((element, index) => {
                if (index === itemIndex) {
                    return {
                        ...element,
                        quantity: element.quantity + 1,
                    };
                } else {
                    return element;
                }
            });
        }

        return {
           ...state,
           order: newOrder,
           alertName: payload.displayName
        }
    };
        case 'DELETE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.mainId)
            };
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map((element) => {
                    if (element.mainId === payload.mainId) {
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        }
                    } else {
                        return element
                    }
                }),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map((element) => {
                    if (element.mainId === payload.mainId && element.quantity >= 2) {
                        return {
                            ...element,
                            quantity: element.quantity - 1,
                        }
                    } else {
                        return element
                    }
                }),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            };
        default:
            return state;
    };
};