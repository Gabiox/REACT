import React from 'react';
import './Cart.css'

const CartWidget = (params) => {
    return (
        <li><a onClick={params.addCart} href='#'><i id='card' class="fa fa-shopping-cart" aria-hidden="true"/><p>{params.count}</p></a></li>
    );
}

export default CartWidget;