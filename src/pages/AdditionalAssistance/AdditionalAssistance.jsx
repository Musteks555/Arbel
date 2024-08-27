import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./AdditionalAssistance.module.css";

const AdditionalAssistance = () => {
    return (
        <>
            <DocumentTitle>Additional Assistance</DocumentTitle>

            <h1 className={css.title}>Contact Us</h1>

            <p className={css.text}>
                To get in touch with our Customer Service Team, please send an email to:
                <a href="mailto:hello@arbelsupplements.com" className={css.link}>
                    hello@arbelsupplements.com
                </a>
            </p>

            <p className={css.text}>
                <strong>Please Note:</strong> Our Customer Service is available during weekdays only and is closed on weekends.
            </p>
        </>
    );
};

export default AdditionalAssistance;
