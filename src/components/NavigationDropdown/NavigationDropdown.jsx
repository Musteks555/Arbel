import { Link } from "react-router-dom";

import css from "./NavigationDropdown.module.css";

const NavigationDropdown = ({ index }) => {
    const dropdownItems = [
        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],

        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],

        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],

        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],

        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],

        [
            "All Vitamins",
            "A-Vitamins (5)",
            "B Vitamins & Vitaminoids (31)",
            "D Vitamins (39)",
            "E Vitamins (21)",
            "K Vitamins (29)",
            "Multivitamins (45)",
        ],
    ];

    const selectedGroup = dropdownItems[index];

    return (
        <ul className={css.navigationDropdownList}>
            {selectedGroup?.map((item, itemIndex) => {
                return (
                    <li key={itemIndex} className={css.navigationDropdownItem}>
                        <Link to={""} className={css.navigationDropdownLink}>
                            {item}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationDropdown;
