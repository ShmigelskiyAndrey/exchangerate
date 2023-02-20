import React from "react";
import styles from "./Currency.module.css";

export function Currency() {
  return (
    <div className={styles.currency}>
      <select defaultValue={"RUB"} id="currency" name="currency">
        <option value="RUB">RUB</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="LAR">LAR</option>
      </select>
    </div>
  );
}
