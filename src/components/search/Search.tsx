import { SearchValue } from "@/features/search";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import { useAtom } from "jotai";
import React from "react";
import styles from "./search.module.css";

const Search = () => {
  const [_value, setValue] = useAtom(SearchValue);

  const handleChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, 250);

  return (
    <input
      placeholder="Rechercher..."
      className={styles.search}
      onChange={handleChange}
      type="search"
      name="ville"
      id="ville"
    />
  );
};

export default Search;
