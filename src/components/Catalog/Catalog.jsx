import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import css from "./Catalog.module.css";

const Catalog = ({ productArr, currentPage, totalPages, onPageChange }) => {
    const maxPagesToShow = 3;

    const getPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <section className={css.catalog}>
            <Container>
                <ul className={css.productCardList}>
                    {productArr.map((product) => (
                        <li key={product.id} className={css.productCardItem}>
                            <ProductCard cardInfo={product} />
                        </li>
                    ))}
                </ul>

                <div className={css.pagination}>
                    {currentPage > 1 && (
                        <button className={css.pageButton} onClick={() => onPageChange(currentPage - 1)}>
                            &laquo;
                        </button>
                    )}

                    {pages[0] > 1 && (
                        <>
                            <button className={css.pageButton} onClick={() => onPageChange(1)}>
                                1
                            </button>
                            {pages[0] > 2 && <span className={css.ellipsis}>...</span>}
                        </>
                    )}

                    {pages.map((page) => (
                        <button
                            key={page}
                            className={currentPage === page ? css.active : css.pageButton}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    ))}

                    {pages[pages.length - 1] < totalPages && (
                        <>
                            {pages[pages.length - 1] < totalPages - 1 && <span className={css.ellipsis}>...</span>}
                            <button className={css.pageButton} onClick={() => onPageChange(totalPages)}>
                                {totalPages}
                            </button>
                        </>
                    )}

                    {currentPage < totalPages && (
                        <button className={css.pageButton} onClick={() => onPageChange(currentPage + 1)}>
                            &raquo;
                        </button>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Catalog;
