import { CiMail } from "react-icons/ci";

import css from "./MailClicker.module.css";

const MailClicker = () => {
    return (
        <div className={css.mailClickerContainer}>
            <p className={css.mailClickerText}>Need assistance with your order? We’re here to answer any questions you might have.</p>

            <a href="mailto:hello@arbel-supplements.com" className={css.mailClickerLink}>
                <CiMail size={32} />
                Contact
            </a>
        </div>
    );
};

export default MailClicker;
