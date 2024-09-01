import { useState, useEffect } from "react";
import Catalog from "../../components/Catalog/Catalog";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import VitaminsData from "../../data/vitamins.json";
import CollagenData from "../../data/collagen.json";
import HyaluronicAcidData from "../../data/hyaluronic-acid.json";
import ProbioticsData from "../../data/probiotics.json";

const Products = ({ page }) => {
    const [productArr, setProductArr] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 24;

    useEffect(() => {
        let selectData = [];

        switch (page) {
            case "All Products": {
                selectData = [...VitaminsData, ...CollagenData, ...HyaluronicAcidData, ...ProbioticsData];
                break;
            }
            case "Vitamins":
                selectData = VitaminsData;
                break;
            case "A-Vitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "A");
                break;
            case "B-Vitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "B");
                break;
            case "D-Vitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "D");
                break;
            case "E-Vitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "E");
                break;
            case "K-Vitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "K");
                break;
            case "Multivitamins":
                selectData = VitaminsData.filter((item) => item.sub_category === "multivitamin");
                break;
            case "Collagen":
                selectData = CollagenData;
                break;
            case "Hyaluronic Acid":
                selectData = HyaluronicAcidData;
                break;
            case "Probiotics":
                selectData = ProbioticsData;
                break;
            default:
                selectData = [];
                break;
        }

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        setTotalItems(selectData.length);
        setProductArr(selectData.slice(startIndex, endIndex));
    }, [page, currentPage]);

    const totalPages = Math.ceil(totalItems / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <DocumentTitle>{page}</DocumentTitle>
            <Catalog
                page={page}
                productArr={productArr}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Products;
