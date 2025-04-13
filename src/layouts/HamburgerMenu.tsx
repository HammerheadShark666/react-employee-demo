import React from "react";
import styles from "./css/HamburgerMenu.module.css";

type Props = {
  onClick: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles["hamburger"]} onClick={onClick}>
      ☰
    </button>
  );
};

export default HamburgerMenu;