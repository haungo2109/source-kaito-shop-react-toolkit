import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import './style.css'
export default function Cart() {
    const dataCard = useSelector(state => state.cart.dataCart);
    return (
        <>
            <div className="ground-card">
                <div className="main-card">
                    <div className="card-user">
                        <Link
                            to="/cart"
                        >
                            <Badge count={dataCard.length} overflowCount={99}>
                                <i className="fa fa-shopping-cart" />
                            </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
