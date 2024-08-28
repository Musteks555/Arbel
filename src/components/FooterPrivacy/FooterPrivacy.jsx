import Container from "../Container/Container";

import css from "./FooterPrivacy.module.css";

const FooterPrivacy = () => {
    return (
        <div className={css.footerPrivacy}>
            <Container>
                <p className={css.footerPrivacyTitle}>ARBEL PHARMACEUTICALS</p>

                <p className={css.footerPrivacyText}>All rights reserved.</p>

                <p className={css.footerPrivacyText}>© [2024] ARBEL PHARMACEUTICALS.</p>
            </Container>
        </div>
    );
};

export default FooterPrivacy;
