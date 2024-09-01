import ProductCard from "../ProductCard/ProductCard";

import VitaminsData from "../../data/vitamins.json";
import CollagenData from "../../data/collagen.json";
import HyaluronicAcidData from "../../data/hyaluronic-acid.json";
import ProbioticsData from "../../data/probiotics.json";

import css from "./Bestsellers.module.css";

const Bestsellers = () => {
    const allProducts = [...VitaminsData, ...CollagenData, ...HyaluronicAcidData, ...ProbioticsData];

    const getRandomItems = (arr, numItems) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numItems);
    };

    const productArr = getRandomItems(allProducts, 10);

    return (
        <>
            <h2 className={css.bestsellersTitle}>Bestsellers</h2>

            <ul className={css.bestsellersList}>
                {productArr.map((product, index) => {
                    return (
                        <li key={index} className={css.bestsellersItem}>
                            <ProductCard cardInfo={product} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Bestsellers;
