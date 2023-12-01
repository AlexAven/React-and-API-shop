import { useEffect } from 'react';

function Alert(props) {
    const { displayName = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerID)
        }
//eslint-disable-next-line
    }, [displayName]);

    return <div id='toast-container'>
        <div className="toast">{displayName} добавлен в корзину</div>
    </div>
};

export {Alert};