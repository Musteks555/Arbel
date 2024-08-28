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
        { name: "Vitamins (170)", link: "" },
        { name: "Collagen (42)", link: "" },
        { name: "Hyaluronic Acid (20)", link: "" },
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
                        <Link
                            to={`/${item.link}`}
                            className={clsx(css.navigationItemContainer, {
                                [css.active]: visibleDropdown === index,
                            })}
                        >
                            <span>{item.name}</span>
                            <MdOutlineKeyboardArrowDown />
                        </Link>

                        {visibleDropdown === index && (
                            <div
                                className={css.navigationDropdownWrapper}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavigationDropdown index={index} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
