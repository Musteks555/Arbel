import { useState, useEffect } from "react";
import { useParams } from "react-router";
import clsx from "clsx";
import { useDispatch } from "react-redux";

import { addToBasket } from "../../redux/basket/operations";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import VitaminsData from "../../data/vitamins.json";
import CollagenData from "../../data/collagen.json";
import HyaluronicAcidData from "../../data/hyaluronic-acid.json";
import ProbioticsData from "../../data/probiotics.json";

import Container from "../../components/Container/Container";

import { FaBasketShopping } from "react-icons/fa6";

import css from "./Product.module.css";
import DeliveryText from "../../components/DeliveryText/DeliveryText";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const dispatch = useDispatch();

    const handleAddToBasket = () => {
        dispatch(addToBasket(product));
    };

    useEffect(() => {
        const allData = [...VitaminsData, ...CollagenData, ...HyaluronicAcidData, ...ProbioticsData];

        const foundProduct = allData.find((item) => item.id === id);
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const formatText = (text) => {
        const lineBreaks = text.replace(/\n+/g, "<br><br>");

        const boldText = lineBreaks.replace(/(Recommended use:|Please note:|Notes:|Note:)/g, "<strong>$1</strong>");

        return boldText.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    };

    return (
        <section className={css.product}>
            <Container>
                <div className={css.productContainer}>
                    <div className={css.productGallery}>
                        {product.uniqueImages.length === 1 ? (
                            <img src={product.uniqueImages[0]} />
                        ) : (
                            <>
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "##082518c9",
                                        "--swiper-pagination-color": "##082518c9",
                                    }}
                                    spaceBetween={16}
                                    navigation={true}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className={clsx("mySwiper2", css.mySwiper2)}
                                >
                                    {product.uniqueImages.map((img, index) => {
                                        return (
                                            <SwiperSlide key={index} className={css.swiperSlide}>
                                                <img src={img} />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={16}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className={clsx("mySwiper", css.mySwiper)}
                                >
                                    {product.uniqueImages.map((img, index) => {
                                        return (
                                            <SwiperSlide key={index} className={css.swiperSlide}>
                                                <img src={img} />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </>
                        )}
                    </div>

                    <div className={css.productInfo}>
                        <h1 className={css.productName}>{product.productTitle}</h1>

                        <p className={css.productPrice}>{product.price ? `$ ${(product.price * 1.11).toFixed(2)}` : "Not available"}</p>

                        <ul className={css.productCertificatesList}>
                            {product.certificates.map((certificate, index) => {
                                return (
                                    <li key={index} className={css.productCertificatesItem}>
                                        <img
                                            src={certificate.imageSrc}
                                            alt={certificate.certificateText}
                                            className={css.productCertificatesItemImg}
                                        />
                                    </li>
                                );
                            })}
                        </ul>

                        <button type="button" className={css.productBtnAdd} onClick={handleAddToBasket}>
                            <FaBasketShopping className={css.productBtnAddIcon} size={20} color="fff" />
                            Add to basket
                        </button>
                    </div>

                    <div className={css.productDescriptionContainer}>
                        <h2 className={css.productSubtitle}>Description:</h2>

                        <p className={css.productDescriptionText} dangerouslySetInnerHTML={{ __html: formatText(product.description) }} />

                        <table className={css.productAttributesTable}>
                            <tbody>
                                {product.attributes.map((attribute, index) => (
                                    <tr key={index} className={css.productAttributesRow}>
                                        <td className={css.productAttributesTitle} style={{ fontWeight: "bold" }}>
                                            {attribute.name}
                                        </td>
                                        <td className={css.productAttributesText}>{attribute.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className={css.productDescriptionWarning}>
                            Dietary supplements are not a substitute for a varied and balanced diet. Keep away from children.
                            <br />
                            The recommended daily dosage should not be exceeded.
                        </p>
                    </div>
                </div>
            </Container>

            <DeliveryText />
        </section>
    );
};

export default Product;
