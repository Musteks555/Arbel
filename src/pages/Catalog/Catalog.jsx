import ProductCard from "../../components/ProductCard/ProductCard";

import css from "./Catalog.module.css";

const productArr = [];

const Catalog = () => {
    return (
        <ul>
            {productArr.map((product, index) => {
                <li key={index}>
                    <ProductCard />
                </li>;
            })}
        </ul>
    );
};

export default Catalog;
