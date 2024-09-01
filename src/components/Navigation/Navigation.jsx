import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";

import VitaminsData from "../../data/vitamins.json";
import CollagenData from "../../data/collagen.json";
import HyaluronicAcidData from "../../data/hyaluronic-acid.json";
import ProbioticsData from "../../data/probiotics.json";

import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [visibleDropdown, setVisibleDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        if (navItems[index].hasDropdown) {
            setVisibleDropdown(index);
        }
    };

    const handleMouseLeave = () => {
        setVisibleDropdown(null);
    };

    const allProductsCount = VitaminsData.length + CollagenData.length + HyaluronicAcidData.length + ProbioticsData.length;
    const vitaminsCount = VitaminsData.length;
    const collagenCount = CollagenData.length;
    const hyaluronicAcidCount = HyaluronicAcidData.length;
    const probioticsCount = ProbioticsData.length;

    const navItems = [
        { name: `All products (${allProductsCount})`, link: "all-products" },
        { name: `Vitamins (${vitaminsCount})`, link: "vitamins", hasDropdown: true },
        { name: `Collagen (${collagenCount})`, link: "collagen" },
        { name: `Hyaluronic Acid (${hyaluronicAcidCount})`, link: "hyaluronic-acid" },
        { name: `Probiotics (${probioticsCount})`, link: "probiotics" },
    ];

    const vitaminsDropdownItems = [
        { name: `All Vitamins (${vitaminsCount})`, link: "vitamins" },
        { name: `A-Vitamins (${VitaminsData.filter((item) => item.sub_category === "A").length})`, link: "a-vitamins" },
        { name: `B Vitamins & Vitaminoids (${VitaminsData.filter((item) => item.sub_category === "B").length})`, link: "b-vitamins" },
        { name: `D Vitamins (${VitaminsData.filter((item) => item.sub_category === "D").length})`, link: "d-vitamins" },
        { name: `E Vitamins (${VitaminsData.filter((item) => item.sub_category === "E").length})`, link: "e-vitamins" },
        { name: `K Vitamins (${VitaminsData.filter((item) => item.sub_category === "K").length})`, link: "k-vitamins" },
        { name: `Multivitamins (${VitaminsData.filter((item) => item.sub_category === "multivitamin").length})`, link: "multivitamin" },
    ];

    return (
        <nav className={css.navigationContainer}>
            <ul className={css.navigationList}>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={css.navigationItem}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            to={`/${item.link}`}
                            className={clsx(css.navigationItemContainer, {
                                [css.active]: visibleDropdown === index,
                            })}
                        >
                            <span>{item.name}</span>

                            {item.hasDropdown && <MdOutlineKeyboardArrowDown />}
                        </Link>

                        {visibleDropdown === index && item.hasDropdown && <NavigationDropdown dropdownItems={vitaminsDropdownItems} />}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
