import ProductCard from "../ProductCard/ProductCard";

import css from "./Bestsellers.module.css";

const Bestsellers = () => {
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
