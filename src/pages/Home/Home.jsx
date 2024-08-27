import DeliveryText from "../../components/DeliveryText/DeliveryText";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import MainDescription from "../../components/MainDescription/MainDescription";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
// Bestsellers

const Home = () => {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <MainDescription />
            <ProductCategories />
            {/* Bestsellers  */}
            <DeliveryText />
        </>
    );
};

export default Home;
