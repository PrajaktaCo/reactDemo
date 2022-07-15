import React from "react";
import { Search } from "@mui/icons-material";

import styles from "./header.module.scss";
import { Button } from "../../Components";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerCont}>
        <div className={styles.logo}>BUSIN</div>
        <div className={styles.rightCont}>
          <div className={styles.tabs}>
            {["Home", "Portfolio", "Pages", "Blog", "Shop", "Support"].map(
              (item) => (
                <div className={styles.tabName}>{item}</div>
              )
            )}
          </div>
          <Search />
          <Button label={"Get Strated"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Header;
