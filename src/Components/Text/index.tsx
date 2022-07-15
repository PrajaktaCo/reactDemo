import React from "react";
import styles from "./text.module.scss";

const Text = ({ text, fontSize, fontColor, fontWeight, txtStyle }) => {
  return (
    <div
      className={`${txtStyle ? txtStyle : styles.container} `}
      style={{ fontSize: fontSize, color: fontColor, fontWeight: fontWeight }}
    >
      {text}
    </div>
  );
};

export default Text;
