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

        ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"],

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
        <ul className={css.NavigationDropdownList}>
            {selectedGroup?.map((item, itemIndex) => {
                return (
                    <li key={itemIndex} className={css.NavigationDropdownItem}>
                        <a href="#" className={css.NavigationDropdownLink}>
                            {item}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationDropdown;
