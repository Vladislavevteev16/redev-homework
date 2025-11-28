import styles from "../Common/UserProfile.module.css";
import { useState } from "react";

export const ShoppingCart = () => {
  const [item, setItem] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
    { id: 3, title: "Джинсы", count: 1 },
    { id: 4, title: "Рубашка", count: 2 },
  ]);

  const clearCart = () => setItem([]);

  const removeItem = (itemId) =>
    setItem((prev) => prev.filter(({ id }) => id !== itemId));

  const increaseQty = (itemId) => {
    setItem((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      )
    );
  };

  return (
    <div className={`${styles.card} ${styles.bgShoppingCart}`}>
      <h1>Корзина товаров</h1>
      <div className={styles.cartContainer}>
        {item.map(({ id, title, count }) => {
          return (
            <div className={styles.cart} key={id}>
              <p>
                {title} (Кол-во: {count})
              </p>{" "}
              <div className={styles.buttonsProduct}>
                <button
                  className={styles.buttonAddProduct}
                  onClick={() => increaseQty(id)}
                >
                  +1
                </button>
                <button onClick={() => removeItem(id)}>Удалить</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.contentContainer}>
        <button onClick={clearCart} className={styles.buttonClearBasket}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
};
