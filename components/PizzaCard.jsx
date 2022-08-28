import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  const { img, title, desc, prices } = pizza;

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image alt="" src={img} width={`500`} height={`500`} />
      </Link>

      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>${prices[0]}.</span>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default PizzaCard;
