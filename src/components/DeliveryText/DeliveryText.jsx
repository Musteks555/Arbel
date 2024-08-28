import css from "./DeliveryText.module.css";

const DeliveryText = () => {
    return (
        <div className={css.deliveryWrapper}>
            <div className={css.deliverySlide}>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
            </div>

            <div className={css.deliverySlide} aria-hidden="true">
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
                <p className={css.deliveryText}>Free standard delivery from $50</p>
            </div>
        </div>
    );
};

export default DeliveryText;
