import styles from "./CountryItem.module.css";
import { Link } from "react-router-dom";

function CountryItem({ country }) {
  return (
    <li>
      <Link className={styles.countryItem}>
        <span>{country.emoji}</span>
        <span>{country.country}</span>
      </Link>
    </li>
  );
}

export default CountryItem;
