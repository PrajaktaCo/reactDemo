import React from "react";

import styles from "./list.module.scss";
import { Text } from "../../Components";

const List = ({ item }) => {
  return (
    <div>
      <Text
        text={item.title}
        fontWeight={"bold"}
        fontSize={14}
        fontColor={"white"}
        txtStyle={styles.title}
      />

      {item.list?.map((item) => (
        <Text
          text={item}
          fontWeight={"normal"}
          fontSize={11}
          fontColor={"white"}
          txtStyle={styles.label}
        />
      ))}
    </div>
  );
};

export default List;
