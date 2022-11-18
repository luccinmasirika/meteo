import { SearchValue } from "@/features/search";
import { useAtom } from "jotai";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const [search, _setSearch] = useAtom(SearchValue);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Weather App</h1>
    </div>
  );
};

export default Header;
