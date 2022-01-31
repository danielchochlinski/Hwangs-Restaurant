import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Best of chinese from Hwang</h2>
      <p>
        Legendary meals from the legendary Hwang Sr. now available to you. A
        family run bunsiess with over a dacade of expirience in traditional Chinese food.
      </p>
      <p>
        High-quality ingredients, on time delivery, straight from the legendary
        Hwangs Sr. recipe book.
      </p>
    </section>
  );
};

export default MealsSummary;
