import React, { useState } from "react";
import {
  Container,
  Header,
  Text,
  Button,
  SubTitle,
  PricePlan,
  News,
  Footer,
} from "../Components";
import {
  textCardOne,
  textCardTwo,
  textCardThree,
  pricePlan,
  pricePlanCard,
  testimonal,
  experiment,
  experimentCard,
  contact,
  footer,
} from "../Constant/en";
import styles from "./landing.module.scss";

const Landing = () => {
  const [email, setEmail] = useState("");
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
            <SubTitle
              ltTxt={textCardTwo.txt1}
              bldTxt={textCardTwo.txt2}
              smStyle={styles.smBld}
              bldStyle={styles.bldTxtTwo}
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

        <Container cntStyle={styles.thrdCont}>
          <img
            src={"./assets/images/imgthree.jpeg"}
            className={styles.imgStyle_three}
            alt={"lady"}
          />
          <div className={styles.textStyle}>
            <SubTitle
              ltTxt={textCardThree.txt1}
              bldTxt={textCardThree.txt2}
              smStyle={styles.smBld}
              bldStyle={styles.bldTxtTwo}
            />
            <Text
              text={textCardThree.txt3}
              fontWeight={"normal"}
              fontSize={12}
              fontColor={"grey"}
              txtStyle={styles.ltTxtThree}
            />
          </div>
        </Container>
        <Container cntStyle={styles.pricePlan}>
          <SubTitle
            ltTxt={pricePlan.header.light}
            bldTxt={pricePlan.header.bold}
            cntStyle={styles.subTitle}
            smStyle={styles.smTxt}
            fontSize={18}
          />
          <PricePlan data={pricePlanCard} />
        </Container>
        <Container cntStyle={styles.testimonal}>
          <SubTitle
            ltTxt={testimonal.title}
            bldTxt={testimonal.subTitle}
            cntStyle={styles.subTitle}
            smStyle={styles.smTxt}
            fontSize={18}
          />
          <img
            src={"./assets/images/testimonial-front.png"}
            className={styles.imgStyle}
            alt={"testional"}
          />
        </Container>
        <Container cntStyle={styles.testimonal}>
          <SubTitle
            ltTxt={experiment.title}
            bldTxt={experiment.subTitle}
            cntStyle={styles.subTitle}
            smStyle={styles.smTxt}
            fontSize={18}
          />
          <News data={experimentCard} />
        </Container>
        <Container cntStyle={styles.contact}>
          <div>
            <SubTitle
              ltTxt={contact.title}
              bldTxt={contact.subTitle}
              cntStyle={styles.txt}
              bldStyle={styles.bldStyle}
              fontSize={21}
            />
            <div className={styles.emailWrapper}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={contact.placeHolder}
                className={styles.email}
              />
              <Button
                label={"Contact Us"}
                onClick={() => {}}
                btnStyle={styles.btn}
              />
            </div>
          </div>
          <img
            src={"./assets/images/imgOne.jpeg"}
            className={styles.imgStyle}
            alt={"lady"}
          />
        </Container>
      </div>
      <Footer data={footer} />
    </div>
  );
};

export default Landing;
