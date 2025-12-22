import { memo } from "react";
import styles from "../../styles/common.module.css";

export const CartItem = memo(
  ({ id, title, count, handleIncreaseQuantity, removeItem }) => {
    return (
      <div className={styles.cart}>
        <p>
          {title} (Кол-во: {count})
        </p>{" "}
        <div className={styles.buttonsProduct}>
          <button
            className={styles.buttonAddProduct}
            onClick={() => handleIncreaseQuantity(id)}
          >
            +1
          </button>
          <button onClick={() => removeItem(id)}>Удалить</button>
        </div>
      </div>
    );
  }
);
