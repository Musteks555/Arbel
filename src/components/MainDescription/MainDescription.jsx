import css from "./MainDescription.module.css";

const MainDescription = () => {
    return (
        <>
            <h2 className={css.title}>Dietary Supplements for the Entire Family</h2>

            <p className={css.text}>
                Vitamins, minerals, and trace elements play a crucial role in maintaining a healthy metabolism. Adding supplementary
                nutrients to your daily intake can help round out a balanced diet, making them beneficial for individuals of all ages. These
                supplements are ideal for seamlessly incorporating essential nutrients into your daily routine, supporting overall health
                and well-being for the whole family.
            </p>
        </>
    );
};

export default MainDescription;
