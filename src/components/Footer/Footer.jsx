import FooterNavigation from "../FooterNavigation/FooterNavigation";
import FooterPrivacy from "../FooterPrivacy/FooterPrivacy";
import MailClicker from "../MailClicker/MailClicker";

import css from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <MailClicker />

            <FooterNavigation />

            <FooterPrivacy />
        </footer>
    );
};

export default Footer;
