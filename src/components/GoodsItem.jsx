function GoodsItem(props) {
    const {
        mainId,
        displayName, 
        displayDescription,
        price: {regularPrice},
        displayAssets: [{full_background}],
        addToCart = Function.prototype
    } = props;

    return <div className='card'>
        <div className='card-image'>
            <img src={full_background} alt={displayName} />
        </div>
        <div className='card-content'>
            <span className='card-title'>{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className='btn' onClick={() => addToCart({
                mainId,
                displayName,
                regularPrice
            })}>Купить</button>
            <span className='right' style={{fontSize: '1.6rem'}}>{regularPrice} &#x20bd;</span>
        </div>
    </div>
}



export {GoodsItem}