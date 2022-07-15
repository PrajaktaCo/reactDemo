import React from "react";
import styles from "./container.module.scss";

const Container = ({ children, cntStyle }) => {
  return (
    <div className={`${cntStyle ? cntStyle : styles.container}`}>
      {children}
    </div>
  );
};

export default Container;
