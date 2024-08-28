import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Container from "../../components/Container/Container";
import WholesaleBtn from "../../components/WholesaleBtn/WholesaleBtn";
import MainDescription from "../../components/MainDescription/MainDescription";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
// Bestsellers
import DeliveryText from "../../components/DeliveryText/DeliveryText";

import css from "./Home.module.css";

const Home = () => {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <WholesaleBtn />

            <section className={css.productCategories}>
                <Container>
                    <MainDescription />
                    <ProductCategories />
                </Container>
            </section>

            <section className={css.bestsellers}>
                <Container>{/* <Bestsellers/> */}</Container>
            </section>

            <WholesaleBtn />

            <DeliveryText />
        </>
    );
};

export default Home;
