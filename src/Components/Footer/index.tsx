import React from "react";
import styles from "./footer.module.scss";
import { List } from "../../Components";

const Footer = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <List item={item} />
      ))}
    </div>
  );
};

export default Footer;
