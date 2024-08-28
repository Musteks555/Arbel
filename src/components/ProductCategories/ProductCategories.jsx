import { Link } from "react-router-dom";

import vitaminsImg from "../../images/vitamins.jpeg";
import probioticsImg from "../../images/probiotics.jpeg";
import hyaluronicAcidImg from "../../images/hyaluronicAcid.jpeg";
import collagenImg from "../../images/collagen.jpeg";

import css from "./ProductCategories.module.css";

const ProductCategories = () => {
    const productCategories = [
        { name: "Vitamins", image: vitaminsImg, link: "vitamins" },
        { name: "Collagen", image: collagenImg, link: "collagen" },
        { name: "Hyaluronic Acid", image: hyaluronicAcidImg, link: "hyaluronic-acid" },
        { name: "Probiotics", image: probioticsImg, link: "probiotics" },
    ];

    return (
        <ul className={css.productCategoriesList}>
            {productCategories.map((category, index) => {
                return (
                    <li key={index} className={css.productCategoriesItem}>
                        <Link to={`/${category.link}`} className={css.productCategoriesLink}>
                            <img src={category.image} alt={category.name} className={css.productCategoriesLinkImage} />

                            {category.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductCategories;
