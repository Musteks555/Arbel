import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { selectTotalPrice, selectTotalQuantity } from "../../redux/basket/selectors";

import Container from "../Container/Container";
import DeliveryText from "../DeliveryText/DeliveryText";
import Navigation from "../Navigation/Navigation";

import logo from "../../images/logo.png";

import css from "./Header.module.css";

const Header = () => {
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <header className={css.header}>
            <DeliveryText />

            <Container>
                <div className={css.headerContainer}>
                    <Link to={"/"} className={css.headerLogo}>
                        <img src={logo} alt="logo" className={css.headerLogoImage} />
                    </Link>

                    <Link to="/basket" className={css.headerBasket}>
                        <FaBasketShopping className={css.headerBasketIcon} />

                        <div className={css.headerBasketDetails}>
                            <p className={css.headerBasketText}>Basket</p>
                            <p className={css.headerBasketTotal}>${totalPrice.toFixed(2)}</p>

                            <div className={css.headerBasketQuantityContainer}>
                                <p className={css.headerBasketQuantity}>{totalQuantity}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>

            <Navigation />
        </header>
    );
};

export default Header;
