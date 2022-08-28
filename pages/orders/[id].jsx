import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
  const status = 0;

  const statusClassName = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>

            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>29938331039</span>
              </td>

              <td>
                <span className={styles.name}>John Doe</span>
              </td>

              <td>
                <span className={styles.address}>Ebis Mechanic, Amarata</span>
              </td>

              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClassName(0)}>
            <Image alt="" src={`/images/paid.png`} height={30} width={30} />
            <span>Payment</span>

            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src={`/images/checked.png`}
                height={20}
                width={20}
                className={styles.chedkedIcon}
              />
            </div>
          </div>

          <div className={statusClassName(1)}>
            <Image alt="" src={`/images/bake.png`} height={30} width={30} />
            <span>Preparing</span>

            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src={`/images/checked.png`}
                height={20}
                width={20}
                className={styles.chedkedIcon}
              />
            </div>
          </div>

          <div className={statusClassName(2)}>
            <Image alt="" src={`/images/bike.png`} height={30} width={30} />
            <span>On the way</span>

            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src={`/images/checked.png`}
                height={20}
                width={20}
                className={styles.chedkedIcon}
              />
            </div>
          </div>

          <div className={statusClassName(3)}>
            <Image
              alt=""
              src={`/images/delivered.png`}
              height={30}
              width={30}
            />
            <span>Delivered</span>

            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src={`/images/checked.png`}
                height={20}
                width={20}
                className={styles.chedkedIcon}
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
