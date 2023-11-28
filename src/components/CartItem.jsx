function CartItem(props) {
    const {
        mainId,
        displayName, 
        regularPrice,
        quantity,
        deleteFromCart = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity= Function.prototype
    } = props

    return (
        <li className='collection-item'>{displayName}: {regularPrice} &#x20bd;{' '}
            <button className='btns' onClick={() => decreaseQuantity(mainId)}>-</button>{' '}
            x{quantity} <button className='btns' onClick={() => increaseQuantity(mainId)}>+</button>{' '}
            шт. = {regularPrice * quantity} &#x20bd;
            <span className="secondary-content" onClick={() => deleteFromCart(mainId)}>
                <i className="material-icons cart-delete">close</i>  
            </span>
        </li>
    );
};

export {CartItem};