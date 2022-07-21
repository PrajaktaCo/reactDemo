import React from "react";
import styles from "./subtitle.module.scss";
import { Text } from "../../Components";

const SubTitle = ({
  ltTxt,
  bldTxt,
  smStyle,
  bldStyle,
  fontSize = 31,
  cntStyle,
}) => {
  return (
    <div className={cntStyle}>
      <Text
        text={ltTxt}
        fontWeight={"700"}
        fontSize={11}
        txtStyle={smStyle && smStyle}
      />
      <Text
        text={bldTxt}
        fontWeight={"bold"}
        fontSize={fontSize}
        txtStyle={bldStyle && bldStyle}
      />
    </div>
  );
};

export default SubTitle;
