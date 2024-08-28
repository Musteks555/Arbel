import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";

import css from "./Catalog.module.css";

const productArr = [
    {
        name: "  Vitamin D3 1000, 30 ml",
        img: "https://va.nice-cdn.com/upload/image/product/large/default/nature-love-vitamin-d3-1000-30-ml-1296293-en.png",
        price: "7,49",
        advantages: ["Highly dosed", "Only 1 drop daily", "Enough for 1 year"],
    },
    {
        name: "  Vitamin D3 1000, 30 ml",
        img: "https://va.nice-cdn.com/upload/image/product/large/default/nature-love-vitamin-d3-1000-30-ml-1296293-en.png",
        price: "7,49",
        advantages: ["Highly dosed", "Only 1 drop daily", "Enough for 1 year"],
    },
    {
        name: "  Vitamin D3 1000, 30 ml",
        img: "https://va.nice-cdn.com/upload/image/product/large/default/nature-love-vitamin-d3-1000-30-ml-1296293-en.png",
        price: "7,49",
        advantages: ["Highly dosed", "Only 1 drop daily", "Enough for 1 year"],
    },
    {
        name: "  Vitamin D3 1000, 30 ml",
        img: "https://va.nice-cdn.com/upload/image/product/large/default/nature-love-vitamin-d3-1000-30-ml-1296293-en.png",
        price: "7,49",
        advantages: ["Highly dosed", "Only 1 drop daily", "Enough for 1 year"],
    },
];

const Catalog = () => {
    return (
        <section className={css.catalog}>
            <Container>
                <ul className={css.productCardList}>
                    {productArr.map((product, index) => {
                        return (
                            <li key={index} className={css.productCardItem}>
                                <ProductCard cardInfo={product} />
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
};

export default Catalog;
