import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);

    changePrice(diff);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleAdd = () => {
    dispatch(addProduct({ ...pizza, extras, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt={``}
            objectFit={`contain`}
            layout={`fill`}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>

        <p className={styles.desc}>{pizza.desc}</p>

        <h3 style={styles.choose}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              alt=""
              src={`/images/size.png`}
              layout={`fill`}
              objectFit={`contain`}
            />
            <span className={styles.number}>Small</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              alt=""
              src={`/images/size.png`}
              layout={`fill`}
              objectFit={`contain`}
            />
            <span className={styles.number}>Medium</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image
              alt=""
              src={`/images/size.png`}
              layout={`fill`}
              objectFit={`contain`}
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 style={styles.choose}>Choose additional ingredients</h3>

        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option, i) => (
            <div className={styles.option} key={i}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={(e) => handleChange(e, option)}
                className={styles.checkbox}
              />

              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button} onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data.product,
    },
  };
};

export default Product;
