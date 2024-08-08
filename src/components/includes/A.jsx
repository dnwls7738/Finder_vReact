import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/main.module.css";
function A({ address, url, title, tel }) {
  return (
    <Link className={styles.url} to={`/info/${tel}`}>
      <li>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.address}>{address}</p>
        </div>
        <div className={styles.docs}>
          <p>연락가능시간 : 09:00 ~ 18:00</p>
          <p>연락처 : {tel}</p>
        </div>
      </li>
    </Link>
  );
}
export default A;
