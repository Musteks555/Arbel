import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <>
            <DocumentTitle>ABOUT US</DocumentTitle>

            <h1 className={css.title}>Welcome to ARBEL SUPPLEMENTS</h1>

            <p className={css.text}>
                At ARBEL SUPPLEMENTS, we pride ourselves on being a provider of high-quality dietary supplements designed to support the
                well-being of your entire family. Our commitment to excellence ensures that each product is crafted with the finest
                ingredients, carefully formulated to meet your nutritional needs.
            </p>

            <p className={css.text}>
                Whether you’re looking to enhance your daily health routine or address specific dietary requirements, our diverse range of
                supplements offers something for everyone. From essential vitamins and minerals to specialized blends for various health
                goals, ARBEL SUPPLEMENTS is dedicated to providing solutions that promote a healthier, more balanced lifestyle.
            </p>

            <p className={css.text}>
                Our mission is to deliver not just products, but also trust and reliability. We understand the importance of choosing the
                right supplements for your family, and we are here to guide you every step of the way. Explore our premium selection and
                experience the difference that quality and care make.
            </p>

            <p className={css.text}>Discover how ARBEL SUPPLEMENTS can be a part of your family’s journey to better health.</p>
        </>
    );
};

export default AboutUs;
