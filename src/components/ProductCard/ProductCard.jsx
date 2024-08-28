import { FaBasketShopping } from "react-icons/fa6";

import css from "./ProductCard.module.css";

const ProductCard = ({ cardInfo }) => {
    return (
        <>
            <img src={cardInfo.img} alt={cardInfo.name} className={css.productCardImage} />

            <button className={css.productCardBtn}>
                <div className={css.productCardBtnContainer}>
                    <FaBasketShopping className={css.productCardBtnIcon} size={24} color="fff" />
                </div>
            </button>

            <p className={css.productCardName}>{cardInfo.name}</p>

            <ul className={css.productCardAdvantagesList}>
                {cardInfo.advantages.map((advantage, index) => {
                    return (
                        <li key={index} className={css.productCardAdvantagesItem}>
                            <span>{advantage}</span>
                        </li>
                    );
                })}
            </ul>

            <p className={css.productCardPrice}>$ {cardInfo.price}</p>
        </>
    );
};

export default ProductCard;
