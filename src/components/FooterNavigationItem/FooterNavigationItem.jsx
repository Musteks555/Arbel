import css from "./FooterNavigationItem.module.css";

const FooterNavigationItem = ({ navInfo }) => {
    return (
        <>
            <h3 className={css.footerNavigationItemTitle}>{navInfo.title}</h3>

            <ul className={css.footerNavigationItemList}>
                {navInfo.list.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="" className={css.footerNavigationItemLink}>
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default FooterNavigationItem;
