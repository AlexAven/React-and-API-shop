import { CartItem } from './CartItem';
import { useContext } from 'react';
import { ShopContext } from '../context'; 

function CartList() {
    const { 
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice * el.quantity
    }, 0);
    
    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Корзина <i className="material-icons close-cart">close</i> </li>
            {
                order.length ? order.map(item => (
                    <CartItem key={item.mainId} {...item}
                />
                )) : <li className='collection-item'>Корзина пуста...</li>
            }
            <li className='collection-item active'>Общая стоимость: {totalPrice} &#x20bd;
            </li>
            <li className='collection-item active'>
                {order.length ? <button className='btn-small btn-checkout'>Оформить</button> : <button className='btn-small btn-checkout' disabled>Оформить</button> }
            </li>
            <i className="material-icons close-cart" onClick={handleBasketShow}>close</i>
        </ul>
    );
};

export {CartList};