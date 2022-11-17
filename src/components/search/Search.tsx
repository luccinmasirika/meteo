import React, { useCallback } from "react";
import { useAtom } from "jotai";
import styles from "./search.module.css";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import { SearchValue } from "@/features/search";

const Search = () => {
  const [value, setValue] = useAtom(SearchValue);

  const handleChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, 300);

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
