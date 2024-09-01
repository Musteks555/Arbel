import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaBasketShopping, FaCheck } from "react-icons/fa6";
import { addItem } from "../../redux/basket/slice";

import css from "./ProductCard.module.css";

const ProductCard = ({ cardInfo }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToBasket = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsAdded(true);

            dispatch(addItem(cardInfo));

            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }, 1000);
    };

    return (
        <div className={css.productCard}>
            <Link to={`/product/${cardInfo.id}`}>
                <img src={cardInfo.uniqueImages[0]} alt={cardInfo.productTitle} className={css.productCardImage} />
            </Link>

            <button className={css.productCardBtn} onClick={handleAddToBasket}>
                <div className={css.productCardBtnContainer}>
                    {isLoading ? (
                        <div className={css.spinner}></div>
                    ) : isAdded ? (
                        <FaCheck className={css.productCardBtnIcon} size={24} color="fff" />
                    ) : (
                        <FaBasketShopping className={css.productCardBtnIcon} size={24} color="fff" />
                    )}
                </div>
            </button>

            <p className={css.productCardName}>{cardInfo.productTitle}</p>

            <ul className={css.productCardAdvantagesList}>
                {cardInfo.features.map((advantage, index) => (
                    <li key={index} className={css.productCardAdvantagesItem}>
                        <span>{advantage}</span>
                    </li>
                ))}
            </ul>

            <p className={css.productCardPrice}>{cardInfo.price ? `$ ${(cardInfo.price * 1.11).toFixed(2)}` : "Not available"}</p>
        </div>
    );
};

export default ProductCard;
