import React from "react";
import styles from "./Section.module.css";

export function Section(prop) {
  return (
    <div className={styles.container}>
      <h1>{prop.title}</h1>
      {prop.children}
    </div>
  );
}
