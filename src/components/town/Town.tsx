import { BASE_URL, KEY } from "@/config/url";
import { SearchValue } from "@/features/search";
import { useFetch } from "@/hooks/useFetch";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import { useAtom } from "jotai";
import styles from "./town.module.css";

const Town = () => {
  const [search, _setSearch] = useAtom(SearchValue);
  const data = useFetch<Data>(`${BASE_URL}?q=${search}&appid=${KEY}`);

  const weather = data.response;

  if (data?.isLoading) {
    return (
      <div className={styles.container}>
        <span>Loading...</span>
      </div>
    );
  }

  if (!isObjectEmpty(data.error)) {
    console.log("data.error", data.error);
    throw new Error("Somethings wet wrong");
  }

  if (!data?.isLoading && data.response?.cod === 400) {
    return (
      <div className={styles.container}>
        <span>No data found</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather in {weather?.name}</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Temperature &rarr;</h3>
          <p>{weather?.main?.temp}</p>
        </div>
        <div className={styles.card}>
          <h3>Feels like &rarr;</h3>
          <p>{weather?.main?.feels_like}</p>
        </div>
        <div className={styles.card}>
          <h3>Humidity &rarr;</h3>
          <p>{weather?.main?.humidity}</p>
        </div>
        <div className={styles.card}>
          <h3>Pressure &rarr;</h3>
          <p>{weather?.main?.pressure}</p>
        </div>
        <div className={styles.card}>
          <h3>Wind speed &rarr;</h3>
          <p>{weather?.wind?.speed}</p>
        </div>
        <div className={styles.card}>
          <h3>Wind direction &rarr;</h3>
          <p>{weather?.wind?.deg}</p>
        </div>
      </div>
    </div>
  );
};

export default Town;
