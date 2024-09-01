import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

import Layout from "../Layout/Layout";
import SharedLayout from "../SharedLayout/SharedLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Products = lazy(() => import("../../pages/Products/Products"));
const Product = lazy(() => import("../../pages/Product/Product"));
const Basket = lazy(() => import("../../pages/Basket/Basket"));
const PlacingAnOrder = lazy(() => import("../../pages/PlacingAnOrder/PlacingAnOrder"));
const ShippingAndHandling = lazy(() => import("../../pages/ShippingAndHandling/ShippingAndHandling"));
const AdditionalAssistance = lazy(() => import("../../pages/AdditionalAssistance/AdditionalAssistance"));
const WholesaleCustomers = lazy(() => import("../../pages/WholesaleCustomers/WholesaleCustomers"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const AboutUs = lazy(() => import("../../pages/AboutUs/AboutUs"));

function App() {
    return (
        <Layout>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wholesale" element={<Products page={"Wholesale"} />} />
                    <Route path="/all-products" element={<Products page={"All Products"} />} />
                    <Route path="/vitamins" element={<Products page={"Vitamins"} />} />
                    <Route path="/a-vitamins" element={<Products page={"A-Vitamins"} />} />
                    <Route path="/b-vitamins" element={<Products page={"B-Vitamins"} />} />
                    <Route path="/d-vitamins" element={<Products page={"D-Vitamins"} />} />
                    <Route path="/e-vitamins" element={<Products page={"E-Vitamins"} />} />
                    <Route path="/k-vitamins" element={<Products page={"K-Vitamins"} />} />
                    <Route path="/multivitamin" element={<Products page={"Multivitamins"} />} />
                    <Route path="/collagen" element={<Products page={"Collagen"} />} />
                    <Route path="/hyaluronic-acid" element={<Products page={"Hyaluronic Acid"} />} />
                    <Route path="/probiotics" element={<Products page={"Probiotics"} />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/placing-an-order" element={<PlacingAnOrder />} />
                    <Route path="/shipping-handling" element={<ShippingAndHandling />} />
                    <Route path="/additional-assistance" element={<AdditionalAssistance />} />
                    <Route path="/wholesale-customers" element={<WholesaleCustomers />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </SharedLayout>
        </Layout>
    );
}

export default App;
