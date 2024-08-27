import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

import Layout from "../Layout/Layout";
import SharedLayout from "../SharedLayout/SharedLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
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
