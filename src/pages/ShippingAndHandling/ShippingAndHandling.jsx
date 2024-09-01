import css from "./ShippingAndHandling.module.css";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Container from "../../components/Container/Container";

const ShippingAndHandling = () => {
    return (
        <>
            <DocumentTitle>SHIPPING & HANDLING</DocumentTitle>

            <section className={css.page}>
                <Container>
                    <h1 className={css.title}>FAQ</h1>

                    <ul className={css.list}>
                        <li className={css.item}>
                            <h2 className={css.itemTitle}>When will I receive my order?</h2>

                            <p className={css.itemText}>
                                After your order has been shipped, you will receive an email containing a tracking number. By using this
                                tracking number, you can monitor the status of your shipment and get an estimated delivery date. This will
                                allow you to know when to expect your order to arrive.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>My parcel has disappeared. What should I do?</h2>

                            <p className={css.itemText}>
                                If your parcel seems to be missing but the tracking number indicates a &quot;Delivered&quot; status, it may
                                have been delivered to a neighbour or left in a safe place nearby. If you are still unable to locate your
                                order, please contact us directly. We will do everything we can to assist you in finding your parcel and, if
                                necessary, work with the delivery company to start an investigation.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>My parcel arrived damaged. What should I do?</h2>

                            <p className={css.itemText}>We sincerely apologize if your parcel was damaged during transit!</p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Were any products in the parcel damaged?</h2>

                            <p className={css.itemText}>
                                If any products inside the parcel are damaged, please take photos of the damage to both the outer packaging
                                and the affected items right away. It is important to keep the damaged products and the packaging intact, as
                                we will need them to file a compensation claim. Contact us immediately with the photos and details, and we
                                will assist you in resolving the issue.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Are the products you ordered undamaged?</h2>

                            <p className={css.itemText}>
                                If the products inside are intact and only the outer packaging has been damaged, and you wish to return any
                                items, you can use different packaging for the return shipment.
                            </p>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default ShippingAndHandling;
