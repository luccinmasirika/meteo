import { Data } from "@/features/data";
import { SearchValue } from "@/features/search";
import { useAtom } from "jotai";
import styles from "./town.module.css";

const Town = () => {
  const [data, _setData] = useAtom(Data);
  const [search, _setSearch] = useAtom(SearchValue);

  const list = search ? data.filter((el) => el.startsWith(search)) : data;

  return (
    <div className={styles.town}>
      <ul>
        {list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Town;
