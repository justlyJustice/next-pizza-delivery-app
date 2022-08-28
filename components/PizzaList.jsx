import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

const PizzaList = ({ pizzas }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        perferendis. Sed commodi, vero neque corrupti ea dolor, deserunt illum
        esse illo fugit excepturi hic veniam voluptates amet, quibusdam
        eligendi. Sit!
      </p>

      <div className={styles.wrapper}>
        {pizzas.map((pizza, i) => (
          <PizzaCard key={i} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
