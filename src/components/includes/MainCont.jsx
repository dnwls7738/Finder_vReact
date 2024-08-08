import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { area, Aesthetics } from "../../json/atom";
import A from "./A.jsx";
import { useAtomValue } from "jotai";
import styles from "../../assets/css/main.module.css";

// ---------------- animation
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
// ----------------------------

function MainCont() {
  const setArea = useAtomValue(area);
  const setAesthetics = useAtomValue(Aesthetics);

  const [search, setSearch] = useState("");
  const [idValue, setId] = useState("");
  const [isAvaild, setIsAvaild] = useState(false);
  const [selected, setSelected] = useState("");

  function saveUserId(e) {
    const searchWord = e.target.value;
    const b = setAesthetics.filter((el) => el.title.includes(searchWord));
    setId(b);
    setSearch(searchWord);
  }

  function clickHandler(e) {
    const searchWord = e.target.innerText;
    const b = setAesthetics.filter((el) => el.address.includes(searchWord));
    console.log(b);
    setId(b);
    setIsAvaild(true);
    setSelected(e.target.innerText);
  }

  return (
    <>
      <main className={styles.main}>
        <div id="content">
          <div className={styles.titlea}>
            내 주변 PURAXEL
            <br />
            <span>에스테틱 샵</span>
            <br />
            지금 찾아보세요
          </div>
          {isAvaild ? (
            <div className={styles.search}>
              <form>
                <div className={styles.box}>
                  <input
                    placeholder="상호명 검색"
                    type="text"
                    value={search}
                    onChange={saveUserId}
                  />
                  <span id="search-icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.7477"
                        cy="9.74821"
                        r="6.7"
                        transform="rotate(-10.5618 10.7477 9.74821)"
                        fill="white"
                        stroke="#d09589"
                        stroke-width="1.6"
                      ></circle>
                      <path
                        d="M19.3206 18.3016C19.646 18.6005 20.1521 18.579 20.451 18.2536C20.7499 17.9282 20.7284 17.4221 20.403 17.1232L19.3206 18.3016ZM15.6383 14.9193L19.3206 18.3016L20.403 17.1232L16.7206 13.7409L15.6383 14.9193Z"
                        fill="#d09589"
                      ></path>
                    </svg>
                  </span>
                </div>
              </form>

              <ul className={styles.lista}>
                {setArea.map((el, index) => (
                  <li
                    className={
                      el === selected ? `${styles.select}` : `${styles.no}`
                    }
                    onClick={clickHandler}
                  >
                    <span key={index}>{el}</span>
                  </li>
                ))}
              </ul>
              <AnimatePresence>
                <motion.ul
                  className={styles.result}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 11 }}
                  transition={{ duration: 0.5 }}
                  key={selected ? selected : ""}
                >
                  {idValue.map((el, index) => (
                    <A
                      title={el.title}
                      url={el.url}
                      address={el.address}
                      tel={el.tel}
                      key={index}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          ) : (
            <div>
              <motion.ul
                className={styles.listb}
                variants={boxVariants}
                initial="start"
                animate="end"
              >
                {setArea.map((el, index) => (
                  <motion.li
                    onClick={clickHandler}
                    variants={circleVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span key={index}>{el}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default MainCont;
