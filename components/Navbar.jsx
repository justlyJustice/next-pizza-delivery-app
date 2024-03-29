import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            alt=""
            width={`32`}
            height={`32`}
          />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW! </div>
          <div className={styles.text}>012 349 789</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>

          <Image
            src={`/images/logo.png`}
            alt={``}
            width={`169px`}
            height={`69px`}
          />

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <Link href={`/cart`} passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src={`/images/cart.png`}
              alt={``}
              width={`30px`}
              height={`30px`}
            />

            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
