import { Link } from "react-router-dom";
import css from "./NavigationDropdown.module.css";

const NavigationDropdown = ({ dropdownItems }) => {
    return (
        <ul className={css.navigationDropdownList}>
            {dropdownItems.map((item, itemIndex) => (
                <li key={itemIndex} className={css.navigationDropdownItem}>
                    <Link to={""} className={css.navigationDropdownLink}>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationDropdown;
