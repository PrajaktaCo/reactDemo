import React from "react";
import styles from "./news.module.scss";
import { Button, Text } from "../../Components";
import { style } from "@mui/system";

const News = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.cardWrapper}>
            <img src={item.img} className={styles.img} alt={"img"} />
            <div className={styles.innerWrapper}>
              <Button label={item.status} btnStyle={styles.btn} />
              <Text
                text={item.date}
                fontWeight={"normal"}
                fontSize={14}
                fontColor={"grey"}
              />
            </div>
            <div className={styles.textWrapper}>
              <Text text={item.label} fontWeight={"bold"} fontSize={12} />
              <Text
                text={item.desc}
                fontWeight={"normal"}
                fontSize={12}
                fontColor={"grey"}
                txtStyle={styles.desc}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
