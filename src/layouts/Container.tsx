import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Background from "@/assets/bg.jpg";
import styles from "./container.module.css";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Image src={Background} alt="Weather" className={styles.bg} />
      {children}
    </div>
  );
};
