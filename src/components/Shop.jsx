import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex(element => element.mainId === item.mainId)
        
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((element, index) => {
                if (index === itemIndex) {
                    return {
                        ...element,
                        quantity: element.quantity + 1,
                    };
                } else {
                    return element;
                }
            })

            setOrder(newOrder)
        }
        setAlertName(item.displayName);
    };

    const deleteFromCart = (itemID) => {
        const newOrder = order.filter(el => el.mainId !== itemID);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow); 
    };

    const increaseQuantity = (itemID) => {
        const newQuantity = order.map((element) => {
            if (element.mainId === itemID) {
                return {
                    ...element,
                    quantity: element.quantity + 1,
                }
            } else {
                return element
            }
        })
        setOrder(newQuantity)
    };
    
    const decreaseQuantity = (itemID) => {
        const newQuantity = order.map((element) => {
            if (element.mainId === itemID && element.quantity >= 2) {
                return {
                    ...element,
                    quantity: element.quantity - 1,
                }
            } else {
                return element
            }
        })
        setOrder(newQuantity)
    };
    
    const closeAlert = () => {
        setAlertName('');
    };
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop); 
                setLoading(false);
            });
    }, []);

    return <main className='container content'>
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>}
        {
            isBasketShow && <CartList order={order}
            handleBasketShow={handleBasketShow}
            deleteFromCart={deleteFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
        />
        }
        {alertName && <Alert displayName={alertName} closeAlert={closeAlert}/>}
    </main>
};

export { Shop };

