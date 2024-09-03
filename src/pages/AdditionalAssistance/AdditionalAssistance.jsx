import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./AdditionalAssistance.module.css";

const AdditionalAssistance = () => {
    return (
        <>
            <DocumentTitle>Additional Assistance</DocumentTitle>

            <section className={css.page}>
                <Container>
                    <h1 className={css.title}>Contact Us</h1>

                    <p className={css.text}>
                        To get in touch with our Customer Service Team, please send an email to:
                        <br />
                        <a href="mailto:hello@arbel-supplements.com" target="_blank" rel="noreferrer" className={css.link}>
                            hello@arbel-supplements.com
                        </a>
                    </p>

                    <p className={css.text}>
                        Phone:
                        <br />
                        <a href="tel:+16474986910" className={css.link}>
                            +16474986910
                        </a>
                    </p>

                    <p className={css.text}>
                        <strong>Please Note:</strong> Our Customer Service is available during weekdays only and is closed on weekends.
                    </p>
                </Container>
            </section>
        </>
    );
};

export default AdditionalAssistance;
