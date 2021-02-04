import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

import logo from 'image/logo.png';
import { getMenu } from 'features/Menu/pathAPI';
import './style.css';
export default function Menu() {
    const dispatch = useDispatch();
    const actionGetMenu = () => dispatch(getMenu());
    const list_menu = useSelector(state => state.menu);
    const { Adidas } = list_menu.listMenu;
    const { Nike } = list_menu.listMenu;
    const { Vans } = list_menu.listMenu;
    const { NewBalance } = list_menu.listMenu;
    const { Puma } = list_menu.listMenu;
    const { Converse } = list_menu.listMenu;
    useEffect(() => {
        actionGetMenu();
    }, []);
    const CloseMenu = () => {
        $('.ground-menu').removeClass('open');
        $('body').removeClass('active');
        $('.main-container').removeClass('active');
    }

    return (
        <div className="ground-menu">
            <div className="nav-toggle">
                <span>
                    <i className="fa fa-times" />
                    <Link to="/" className="logo" onClick={CloseMenu}>
                        <img src={logo} alt="logo" />
                    </Link>
                </span>
            </div>

            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/" className="active" onClick={CloseMenu}>
                            trang chủ
                    </Link>
                    </li>
                    <li className="active-menu">
                        <a>
                            Adidas
                        <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                Adidas && (Adidas.map((menu, key) => (
                                    <li key={key}><Link to={`/products/adidas/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                    <li className="active-menu">
                        <a>
                            Nike
                         <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                Nike && (Nike.map((menu, key) => (
                                    <li key={key}><Link to={`/products/nike/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                    <li className="active-menu">
                        <a>
                            Vans <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                Vans && (Vans.map((menu, key) => (
                                    <li key={key}><Link to={`/products/vans/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                    <li className="active-menu">
                        <a>
                            new balance <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                NewBalance && (NewBalance.map((menu, key) => (
                                    <li key={key}><Link to={`/products/new-balance/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                    <li className="active-menu">
                        <a>
                            puma <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                Puma && (Puma.map((menu, key) => (
                                    <li key={key}><Link to={`/products/puma/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                    <li className="active-menu">
                        <a>
                            converse <i className="fa fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                            {
                                Converse && (Converse.map((menu, key) => (
                                    <li key={key}><Link to={`/products/converse/${menu.replace(/ /g, '-')}`} onClick={CloseMenu}>{menu}</Link></li>
                                )))
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}