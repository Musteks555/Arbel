import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";

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

    const navItems = [
        { name: "All products (281)", link: "" },
        { name: "Vitamins (170)", link: "", hasDropdown: true },
        { name: "Collagen (42)", link: "" },
        { name: "Hyaluronic Acid (20)", link: "" },
        { name: "Probiotics (49)", link: "" },
    ];

    const vitaminsDropdownItems = [
        "All Vitamins",
        "A-Vitamins (5)",
        "B Vitamins & Vitaminoids (31)",
        "D Vitamins (39)",
        "E Vitamins (21)",
        "K Vitamins (29)",
        "Multivitamins (45)",
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
