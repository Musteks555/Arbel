import vitaminsImg from "../../images/vitamins.jpeg";
import probioticsImg from "../../images/probiotics.jpeg";
import hyaluronicAcidImg from "../../images/hyaluronicAcid.jpeg";
import collagenImg from "../../images/collagen.jpeg";

import css from "./ProductCategories.module.css";

const ProductCategories = () => {
    const productCategories = [
        { name: "Vitamins", image: vitaminsImg },
        { name: "Collagen", image: collagenImg },
        { name: "Hyaluronic Acid", image: hyaluronicAcidImg },
        { name: "Probiotics", image: probioticsImg },
    ];

    return (
        <ul className={css.productCategoriesList}>
            {productCategories.map((category, index) => {
                return (
                    <li key={index} className={css.productCategoriesItem}>
                        <a href="" className={css.productCategoriesLink}>
                            <img src={category.image} alt={category.name} className={css.productCategoriesLinkImage} />

                            {category.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductCategories;
