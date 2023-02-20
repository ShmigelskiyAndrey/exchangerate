import { Country } from "../Country/Country";
import { Currency } from "../Currency/Currency";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Currency />
        <Country />
      </div>
    </header>
  );
}
