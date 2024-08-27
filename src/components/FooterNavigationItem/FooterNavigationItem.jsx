import { Link } from "react-router-dom";

import css from "./FooterNavigationItem.module.css";

const FooterNavigationItem = ({ navInfo }) => {
    return (
        <>
            <h3 className={css.footerNavigationItemTitle}>{navInfo.title}</h3>

            <ul className={css.footerNavigationItemList}>
                {navInfo.list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${item.link}`} className={css.footerNavigationItemLink}>
                                {item.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default FooterNavigationItem;
