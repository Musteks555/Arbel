import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./PlacingAnOrder.module.css";

const PlacingAnOrder = () => {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <section className={css.page}>
                <Container>
                    <h1 className={css.title}>FAQ</h1>

                    <ul className={css.list}>
                        <li className={css.item}>
                            <h2 className={css.itemTitle}>How will I receive my order confirmation and invoice?</h2>

                            <p className={css.itemText}>
                                Once you have placed an order, one of our managers will contact you within 24 hours during our business
                                hours to confirm the details of your purchase. After the order has been confirmed, we will send an invoice
                                to the email address you provided. You can use this invoice to make the payment for your order.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>When will my order be shipped?</h2>

                            <p className={css.itemText}>
                                Typically, orders are shipped within 2-3 business days after we receive payment. Once the payment is
                                confirmed, we will process and dispatch your order promptly to ensure it reaches you as soon as possible.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Where is my order?</h2>

                            <p className={css.itemText}>
                                Once your order has been shipped, you will receive an email containing a tracking number. This tracking
                                number allows you to easily monitor the status and progress of your shipment at any time, so you know
                                exactly where your order is and when to expect its arrival.
                            </p>
                        </li>

                        <li className={css.item}>
                            <h2 className={css.itemTitle}>Can I change my order?</h2>

                            <p className={css.itemText}>
                                If your order has already been packed, we regret that no changes can be made at that stage. If your order
                                has not yet been packed or dispatched and you wish to make changes, please contact us as soon as possible.
                                Please note that adding or exchanging products may result in additional costs or credits. If the changes
                                lead to a higher total, you will receive a payment request for the outstanding amount. Conversely, if the
                                adjustments result in a lower total, we will issue a refund for the excess amount.
                            </p>
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
                </Container>
            </section>
        </>
    );
};

export default PlacingAnOrder;
