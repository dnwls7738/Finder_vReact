import React from "react";
import logImage from "../../assets/img/brand_logo.png";
import styles from "../../assets/css/header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className="logo">
            <img src={logImage} alt="logo" />
          </div>

          <div className={styles.login}>
            <a
              href="https://puraxel.co.kr/dh/shop_index.html"
              target="_blank"
              rel="noreferrer"
            >
              공식몰 바로가기
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
