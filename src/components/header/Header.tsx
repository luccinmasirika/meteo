import { SearchValue } from "@/features/search";
import { useAtom } from "jotai";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const [search, _setSearch] = useAtom(SearchValue);

  return (
    <div className={styles.header}>
      <p className={styles.title}>Météo App {search && `Ville de ${search}`}</p>
    </div>
  );
};

export default Header;
