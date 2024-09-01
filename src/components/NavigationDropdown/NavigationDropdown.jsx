import { Link } from "react-router-dom";
import css from "./NavigationDropdown.module.css";

const NavigationDropdown = ({ dropdownItems }) => {
    return (
        <ul className={css.navigationDropdownList}>
            {dropdownItems.map((item, itemIndex) => {
                return (
                    <li key={itemIndex} className={css.navigationDropdownItem}>
                        <Link to={`/${item.link}`} className={css.navigationDropdownLink}>
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationDropdown;
