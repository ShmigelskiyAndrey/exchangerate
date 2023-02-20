import React from "react";
import styles from "./Country.module.css";

export function Country() {
  return (
    <div className={styles.country}>
      <select defaultValue={"ARM"} id="country" name="country">
        <option value="ARM">Armenia</option>
        <option value="GEO">Georgia</option>
        <option value="KAZ">kazahstan</option>
      </select>
    </div>
  );
}
