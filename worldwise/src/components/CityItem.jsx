import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
// eslint-disable-next-line react/prop-types
export default function CityItem({ city }) {
  // eslint-disable-next-line react/prop-types
  const { emoji, name, date, id, position } = city;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {emoji}</span>
        <h3 className={styles.name}> {name}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
