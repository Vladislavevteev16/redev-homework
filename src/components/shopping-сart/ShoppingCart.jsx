import { CartItem } from "./CartItem";
import { useState, useCallback } from "react";
import styles from "../../styles/common.module.css";

export const ShoppingCart = () => {
  const [item, setItem] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
    { id: 3, title: "Джинсы", count: 1 },
    { id: 4, title: "Рубашка", count: 2 },
  ]);

  const clearCart = () => setItem([]);

  const removeItem = useCallback(
    (itemId) => setItem((prev) => prev.filter(({ id }) => id !== itemId)),
    []
  );

  const handleIncreaseQuantity = useCallback((itemId) => {
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
  }, []);

  return (
    <div className={`${styles.card} ${styles.bgShoppingCart}`}>
      <h1>Корзина товаров</h1>
      <div className={styles.cartContainer}>
        {item.map(({ id, title, count }) => {
          return (
            <CartItem
              key={id}
              id={id}
              title={title}
              count={count}
              handleIncreaseQuantity={handleIncreaseQuantity}
              removeItem={removeItem}
            />
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
