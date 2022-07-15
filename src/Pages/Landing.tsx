import React from "react";
import { Container, Header, Text, Button } from "../Components";
import { textCardOne, textCardTwo } from "../Constant/en";
import styles from "./landing.module.scss";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Container cntStyle={styles.firstCont}>
          <div className={styles.textStyle}>
            <Text
              text={textCardOne.txt1}
              fontWeight={"bold"}
              fontSize={31}
              txtStyle={styles.bldTxtOne}
            />
            <Text
              text={textCardOne.txt2}
              fontWeight={"normal"}
              fontSize={12}
              fontColor={"grey"}
              txtStyle={styles.ltTxtOne}
            />
            <Button
              label={"Read More"}
              onClick={() => {}}
              btnStyle={styles.btn}
            />
          </div>
          <img
            src={"./assets/images/imgOne.jpeg"}
            className={styles.imgStyle}
            alt={"lady"}
          />
        </Container>

        <Container cntStyle={styles.secCont}>
          <div className={styles.textStyle}>
            <Text
              text={textCardTwo.txt1}
              fontWeight={"600"}
              fontSize={12}
              txtStyle={styles.smBld}
            />
            <Text
              text={textCardTwo.txt2}
              fontWeight={"bold"}
              fontSize={31}
              txtStyle={styles.bldTxtTwo}
            />
            <Text
              text={textCardTwo.txt3}
              fontWeight={"normal"}
              fontSize={12}
              fontColor={"grey"}
              txtStyle={styles.ltTxtTwo}
            />
            <Button
              label={"Read More"}
              onClick={() => {}}
              btnStyle={styles.btn}
            />
          </div>
          <img
            src={"./assets/images/imgTwo.jpeg"}
            className={styles.imgStyle}
            alt={"lady"}
          />
        </Container>
      </div>
    </div>
  );
};

export default Landing;
