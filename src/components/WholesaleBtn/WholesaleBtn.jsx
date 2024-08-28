import { Link } from "react-router-dom";

import css from "./WholesaleBtn.module.css";

const WholesaleBtn = () => {
    return (
        <>
            <div className={css.wholesaleBtnContainer}>
                <Link to={"/"} className={css.wholesaleBtn}>
                    Wholesale
                </Link>
            </div>
        </>
    );
};

export default WholesaleBtn;
