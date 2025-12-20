import { useMemo } from "react";
import style from "./index.module.css";

export const ItemList = ({ userList, searchQuery }) => {
  const filteredList = useMemo(() => {
    return userList.filter(({ name, surName }) => {
      const fullName = `${name} ${surName}`;
      return fullName.includes(searchQuery);
    });
  }, [userList, searchQuery]);

  const displayList = searchQuery ? filteredList : userList;

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {displayList.length ? (
          displayList.map(({ id, name, surName }) => (
            <li className={style.listItem} key={id}>
              {id}. {name} {surName}
            </li>
          ))
        ) : (
          <div className={style.notFound}>"User not found!"</div>
        )}
      </ul>
    </div>
  );
};
