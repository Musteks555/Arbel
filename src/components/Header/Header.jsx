import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";

import Navigation from "../Navigation/Navigation";
import DeliveryText from "../DeliveryText/DeliveryText";

import logo from "../../images/logo.png";

import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <DeliveryText />

            <div className={css.headerContainer}>
                <Link to={"/"} className={css.headerLogo}>
                    <img src={logo} alt="logo" className={css.headerLogoImage} />
                </Link>

                <a href="" className={css.headerBasket}>
                    <FaBasketShopping className={css.headerBasketIcon} />
                </a>
            </div>

            <Navigation />
        </header>
    );
};

export default Header;
