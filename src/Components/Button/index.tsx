import React from "react";
import styles from "./button.module.scss";

const Button = ({ label, onClick, btnStyle }) => {
  return (
    <div
      className={`${styles.container} ${styles.button} ${btnStyle && btnStyle}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
