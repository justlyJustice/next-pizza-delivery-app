import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {cart.products.map((product) => (
            <tr className={styles.tr} key={product._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    alt={product.img}
                    src={`/images/pizza.png`}
                    layout={`fill`}
                    objectFit={`cover`}
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>{product.title}</span>
              </td>

              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>

              <td>
                <span className={styles.price}>${product.price}</span>
              </td>

              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>

              <td>
                <span className={styles.total}>
                  ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> $79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> $0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> $79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
