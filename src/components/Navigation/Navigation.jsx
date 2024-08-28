import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";

import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [visibleDropdown, setVisibleDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setVisibleDropdown(index);
    };

    const handleMouseLeave = () => {
        setVisibleDropdown(null);
    };

    const navItems = [
        { name: "All products (281)", link: "" },
        { name: "Collagen (42)", link: "" },
        { name: "Hyaluronic Acid (20)", link: "" },
        { name: "Probiotics (49)", link: "" },
        { name: "Probiotics (49)", link: "" },
    ];

    return (
        <nav className={css.navigationContainer}>
            <ul className={css.navigationList}>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={clsx(css.navigationItem, { [css.navigationItemLast]: index === navItems.length - 1 })}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to={`/${item.link}`} className={css.navigationItemContainer}>
                            <span>{item.name}</span>
                            <MdOutlineKeyboardArrowDown />
                        </Link>

                        {visibleDropdown === index && <NavigationDropdown index={index} />}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
