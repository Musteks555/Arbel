import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <Navigation />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
