import styles from "./tabmenu.module.scss";
import React, { useEffect, useState } from "react";

const TabMenu = ({ listKategori, tabState, setTabState }) => {
  // console.log("ini komponen dalem", listKategori);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {listKategori?.map((val, idx) => (
          <span
            key={val.id}
            className={`${styles.item} ${
              idx === tabState && styles.itemActive
            }`}
            onClick={() => setTabState(idx)}
          >
            {val.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
