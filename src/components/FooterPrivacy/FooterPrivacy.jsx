import css from "./FooterPrivacy.module.css";

const FooterPrivacy = () => {
    return (
        <div className={css.FooterPrivacy}>
            <p className={css.FooterPrivacyTitle}>ARBEL PHARMACEUTICALS</p>

            <p className={css.FooterPrivacyText}>All rights reserved.</p>

            <p className={css.FooterPrivacyText}>© [2024] ARBEL PHARMACEUTICALS.</p>
        </div>
    );
};

export default FooterPrivacy;
