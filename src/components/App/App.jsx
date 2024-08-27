import Header from "../Header/Header";
import MainDescription from "../MainDescription/MainDescription";
import ProductCategories from "../ProductCategories/ProductCategories";
// Bestsellers
import DeliveryText from "../deliveryText/deliveryText";
import Footer from "../Footer/Footer";

// import css from "./App.module.css";

function App() {
    return (
        <>
            <Header />

            <main>
                <MainDescription />

                <ProductCategories />

                {/* Bestsellers  */}

                <DeliveryText />
            </main>

            <Footer />
        </>
    );
}

export default App;
