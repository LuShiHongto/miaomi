// 购物车
import React, { Component } from 'react';
import './ShoppingCartcss.css';

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div className="ShoppingCart">
                购物车
            </div>
        );
    }
}
export default ShoppingCart;
