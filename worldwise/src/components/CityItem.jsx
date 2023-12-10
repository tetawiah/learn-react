import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext.jsx";

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
  const { cities, currentCity, deleteCity } = useCities();
  const handleClick = (e, id) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}> {emoji}</span>
        <h3 className={styles.name}> {name}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleClick(e, id)}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}
