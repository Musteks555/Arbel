import { FaBasketShopping } from "react-icons/fa6";

import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.png";

import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <p className={css.headerText}>Free standard delivery from $50</p>

            <div className={css.headerContainer}>
                <a href="" className={css.headerLogo}>
                    <img src={logo} alt="logo" className={css.headerLogoImage} />
                </a>

                <a href="" className={css.headerBasket}>
                    <FaBasketShopping className={css.headerBasketIcon} />
                </a>
            </div>

            <Navigation />
        </header>
    );
};

export default Header;
