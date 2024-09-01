import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Contacts.module.css";

const Contacts = () => {
    return (
        <>
            <DocumentTitle>Contacts</DocumentTitle>

            <section className={css.page}>
                <Container>
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
                </Container>
            </section>
        </>
    );
};

export default Contacts;
