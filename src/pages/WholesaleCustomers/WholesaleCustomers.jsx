import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./WholesaleCustomers.module.css";

const WholesaleCustomers = () => {
    return (
        <>
            <DocumentTitle>Wholesale Customers</DocumentTitle>

            <section className={css.page}>
                <Container>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Wholesale Customer information</h2>

                            <p className={css.itemText}>
                                As a corporate customer, you are eligible to place orders with special pricing based on the volume of goods
                                ordered.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Generating an Offer</h2>

                            <p className={css.itemText}>
                                As a business client, you can request a customized offer. Simply email us with your requirements, and we
                                will prepare an offer for you.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Converting an Offer into an Order</h2>

                            <p className={css.itemText}>
                                To convert your offer into an order, you can either reply directly to the offer email or contact our
                                customer service team. If you choose to send a new email, please include the offer number to ensure you
                                receive the same pricing. Please note that offers are valid for 7 days.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Placing a Corporate Order</h2>

                            <p className={css.itemText}>
                                For accurate invoicing and efficient order processing, please provide the following information:
                            </p>

                            <ul className={css.unorderList}>
                                <li>
                                    <p className={css.itemText}>Your company name</p>
                                </li>

                                <li>
                                    <p className={css.itemText}>Billing and delivery addresses</p>
                                </li>

                                <li>
                                    <p className={css.itemText}>An email address</p>
                                </li>

                                <li>
                                    <p className={css.itemText}>A telephone number for any delivery-related queries</p>
                                </li>
                            </ul>

                            <p className={css.itemText}>We look forward to assisting you with your corporate needs.</p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Can I Cancel My Order?</h2>

                            <p className={css.itemText}>
                                Yes, you can cancel your order as long as it has not been shipped. Unfortunately, we are unable to cancel
                                orders that have already been packed or dispatched. If you wish to cancel an order that hasn&apos;t been
                                sent yet, please contact us as soon as possible to ensure we can process your request.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>I Have Not Received an Order Confirmation</h2>

                            <p className={css.itemText}>
                                If you haven&apos;t received an order confirmation, please first check your spam or junk folder to see if
                                the email ended up there. If you still can&apos;t locate the confirmation in your inbox, it&apos;s possible
                                that there was a typo in the email address provided, or that the checkout process was not fully completed.
                                In such cases, please reach out to our customer service team. We are here to assist you and ensure
                                everything is in order with your purchase!
                            </p>
                        </li>
                    </ul>

                    <Bestsellers />
                </Container>
            </section>
        </>
    );
};

export default WholesaleCustomers;
