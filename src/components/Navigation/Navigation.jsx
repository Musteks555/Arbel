import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";

import css from "./Navigation.module.css";

const Navigation = () => {
    const [visibleDropdown, setVisibleDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setVisibleDropdown(index);
    };

    const handleMouseLeave = () => {
        setVisibleDropdown(null);
    };

    const navItems = ["All products (281)", "Vitamins (170)", "Collagen (42)", "Hyaluronic Acid (20)", "Probiotics (49)", "Wholesale"];

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
                        <div className={css.navigationItemContainer}>
                            {item} <MdOutlineKeyboardArrowDown />
                        </div>

                        {visibleDropdown === index && <NavigationDropdown index={index} />}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
