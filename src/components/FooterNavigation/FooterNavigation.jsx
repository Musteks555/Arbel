import FooterNavigationItem from "../FooterNavigationItem/FooterNavigationItem";
import css from "./FooterNavigation.module.css";

const FooterNavigation = () => {
    const navigationInfo = [
        {
            title: "Help & Customer Care",
            list: [
                { text: "Placing an Order", link: "placing-an-order" },
                { text: "Shipping & Handling", link: "shipping-handling" },
                { text: "Looking for Additional Assistance?", link: "additional-assistance" },
                { text: "Wholesale Customers", link: "wholesale-customers" },
            ],
        },

        {
            title: "About us",
            list: [
                { text: "Contacts", link: "contacts" },
                { text: "About us", link: "about-us" },
            ],
        },
    ];

    return (
        <nav className={css.footerNavigation}>
            <ul className={css.footerNavigationList}>
                {navigationInfo.map((nav, index) => {
                    return (
                        <li key={index} className={css.footerNavigationItem}>
                            <FooterNavigationItem navInfo={nav} />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterNavigation;
