import { useEffect, useRef } from "react";

import style from "./index.module.css";

export const Modal = ({ data, setActive }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handlerСloseModal = ({ target }) => {
      if (target !== modalRef.current) {
        setActive(false);
      }
    };

    window.addEventListener("click", handlerСloseModal);

    return () => {
      window.removeEventListener("click", handlerСloseModal);
    };
  }, [setActive]);

  return (
    <div ref={modalRef} className={style.modalContainer}>
      <p>{data}</p>
    </div>
  );
};
