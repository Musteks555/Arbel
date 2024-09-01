import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";

import { addItem, removeItem } from "../../redux/basket/slice";
import { selectBasketItems, selectTotalPrice, selectTotalQuantity } from "../../redux/basket/selectors";
import { updateItemQuantity } from "../../redux/basket/operations";

import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Basket.module.css";

const Basket = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectBasketItems);
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.id));
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(updateItemQuantity(item.id, item.quantity - 1));
        } else {
            dispatch(removeItem(item.id));
        }
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateItemQuantity(id, quantity));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email) {
            toast.error("Email is required.");
            return;
        }

        const basketDetails = items.map((item) => ({
            title: item.productTitle,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity,
        }));

        const formData = {
            email: email,
            basketDetails: JSON.stringify(basketDetails),
            totalQuantity: totalQuantity,
            totalPrice: totalPrice.toFixed(2),
        };

        setIsLoading(true);

        try {
            const response = await axios.post("../../send.php", formData);

            if (response.data.status === "success") {
                toast.success("Thank you for your order! Our team will reach out to you shortly during our business hours.");
            } else {
                toast.error("There was an error submitting your order. Please try again.");
            }
        } catch (error) {
            toast.error("There was an error submitting your order. Please try again.");
            console.log(error);
        } finally {
            setIsLoading(false);
            setEmail("");
        }
    };

    return (
        <>
            <DocumentTitle>Basket</DocumentTitle>
            <Toaster />

            <section className={css.basket}>
                <Container>
                    <div className={css.basketContainer}>
                        <h1 className={css.basketTitle}>
                            <span className={css.basketTitleText}>My Basket: </span>
                            <span>
                                {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}
                            </span>
                            <br />
                            <br />
                            <span className={css.basketTitleText}>Grand Total: </span>
                            <span>$ {totalPrice.toFixed(2)}</span>
                        </h1>

                        {items.length > 0 ? (
                            <ul className={css.basketProductList}>
                                {items.map((basketProduct, index) => (
                                    <li key={index} className={css.basketProductItem}>
                                        <Link to={`/product/${basketProduct.id}`} className={css.basketProductItemImgLink}>
                                            <img
                                                src={basketProduct.uniqueImages[0]}
                                                alt={basketProduct.productTitle}
                                                className={css.basketProductItemImg}
                                            />
                                        </Link>

                                        <div className={css.basketProductItemInfoContainer}>
                                            <Link to={`/product/${basketProduct.id}`} className={css.basketProductItemTitleLink}>
                                                <h2 className={css.basketProductItemName}>{basketProduct.productTitle}</h2>
                                            </Link>

                                            <p className={css.basketProductItemPrice}>$ {basketProduct.price}</p>

                                            <div className={css.basketProductItemQuantityContainer}>
                                                <button
                                                    type="button"
                                                    className={clsx(
                                                        css.basketProductItemQuantityBtn,
                                                        css.basketProductItemQuantityBtnMinus
                                                    )}
                                                    onClick={() => handleDecreaseQuantity(basketProduct)}
                                                >
                                                    <FaMinus className={css.basketProductItemQuantityBtnIcon} />
                                                </button>

                                                <input
                                                    type="number"
                                                    className={css.basketProductItemQuantityInput}
                                                    value={basketProduct.quantity}
                                                    min="1"
                                                    max="100"
                                                    onChange={(e) => handleQuantityChange(basketProduct.id, parseInt(e.target.value))}
                                                />

                                                <button
                                                    type="button"
                                                    className={clsx(css.basketProductItemQuantityBtn, css.basketProductItemQuantityBtnPlus)}
                                                    onClick={() => handleAddItem(basketProduct)}
                                                >
                                                    <FaPlus className={css.basketProductItemQuantityBtnIcon} />
                                                </button>
                                            </div>

                                            <p className={css.basketProductItemSumText}>
                                                Sum:{" "}
                                                <span className={css.basketProductItemSum}>
                                                    $ {(basketProduct.price * basketProduct.quantity).toFixed(2)}
                                                </span>
                                            </p>

                                            <button
                                                type="button"
                                                className={css.basketProductItemRemoveBtn}
                                                onClick={() => handleRemoveItem(basketProduct)}
                                            >
                                                <AiOutlineDelete size={24} />
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className={css.basketEmpty}>
                                <p className={css.basketEmptyText}>Your Basket is empty</p>

                                <CiShoppingBasket size={164} className={css.basketEmptyIcon} />
                            </div>
                        )}

                        <form className={css.basketProductBuyForm} onSubmit={handleSubmit}>
                            <h2 className={css.basketProductBuyTitle}>Order Summary:</h2>

                            <p className={css.basketProductBuyText}>
                                Grand Total: <span className={css.basketProductBuyTotalPrice}>$ {totalPrice.toFixed(2)}</span>
                            </p>

                            <p className={css.basketProductBuyText}>
                                Please, enter your <strong>email</strong> and we will contact you
                            </p>

                            <label className={css.basketProductBuyLabel}>
                                <input
                                    type="email"
                                    name="email"
                                    className={css.basketProductBuyInput}
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <button type="submit" className={css.basketProductBuyBtn} disabled={isLoading}>
                                {isLoading ? <Oval height={24} width={24} color="#fff" /> : "Submit"}
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Basket;
