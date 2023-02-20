import React from "react";
import styles from "./Card.module.css";

export function Card(prop) {
  if (prop.pending) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <p>{prop.currencyName}</p>
      <p>{prop.value}</p>
    </div>
  );
}
