// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import styles from "./Form.module.css";
import Button from "./Button.jsx";
import BackButton from "./BackButton.jsx";
import useUrlPosition from "../hooks/useUrlPosition.jsx";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeoCoding] = useState(false);
  const [geocodingError, setGeoCodingError] = useState("");
  const { createCity, isLoading: isCityLoading } = useCities();
  const navigate = useNavigate();
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?";

  const handleSubmitAction = async (e) => {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate("/app");
  };

  useEffect(() => {
    if (!lat && !lng) return;
    setIsLoadingGeoCoding(true);
    setGeoCodingError("");
    fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.countryCode)
          throw new Error(
            "The doesn't seem to be a city. Click somewhere else",
          );
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      })
      .catch((err) => setGeoCodingError(err.message))
      .finally(setIsLoadingGeoCoding(false));
  }, [lat, lng]);

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;
  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`${styles.form} ${isCityLoading ? styles.loading : ""}`}
      onSubmit={handleSubmitAction}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          format="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
