import React from "react";

import styles from "../css/InformationBox.module.css";

const InformationBox = ({ children, setState }) => {
  return (
    <div className={styles.informationBox}>
      <button
        className={styles.closeMessageBox}
        onClick={() => setState((state) => ({ ...state, infoBox: "" }))}
      >
        X
      </button>
      <div className={styles.informationBoxContent}>{children}</div>
    </div>
  );
};

export default InformationBox;