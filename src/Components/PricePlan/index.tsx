import React from "react";
import styles from "./price.module.scss";
import { Button, Text } from "../../Components";
import { style } from "@mui/system";

const PricePlan = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.cardWrapper}>
            <Text text={item.title} fontWeight={"700"} fontSize={12} />
            <div className={styles.price}>
              <Text text={item.price} fontWeight={"500"} fontSize={55} />
              <Text
                text={"$"}
                fontWeight={"500"}
                fontSize={21}
                txtStyle={styles.dollar}
              />
            </div>
            <div className={styles.divider} />
            {item?.list?.map((i) => {
              return (
                <div className={styles.listItem}>
                  <div>
                    {i?.flag ? (
                      <img
                        src={"./assets/images/check.png"}
                        className={styles.imgStyle}
                        alt={"check"}
                      />
                    ) : (
                      <img
                        src={"./assets/images/close.png"}
                        className={styles.imgStyle}
                        alt={"close"}
                      />
                    )}
                  </div>

                  <Text text={i.label} fontWeight={"500"} fontSize={11} />
                </div>
              );
            })}
            <Button
              label={"Sign Up"}
              onClick={() => {}}
              btnStyle={styles.btn}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PricePlan;
