import React from "react";

import styles from "./thing-widget.module.scss";

const ThingWidget = ({ titleText, subText }) => (
  <div className={styles.thingWidget}>
    <h3 className={styles.thingWidget__titleText}>{titleText}</h3>
    <p className={styles.thingWidget__subText}>{subText}</p>
  </div>
);

export { ThingWidget };
