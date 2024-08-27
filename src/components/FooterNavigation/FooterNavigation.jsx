import FooterNavigationItem from "../FooterNavigationItem/FooterNavigationItem";
import css from "./FooterNavigation.module.css";

const FooterNavigation = () => {
    const navigationInfo = [
        {
            title: "Help & Customer Care",
            list: ["Placing an Order", "Shipping & Handling", "Looking for Additional Assistance?", "Wholesale Customers"],
        },

        {
            title: "About us",
            list: ["Contacts ", "About us"],
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
