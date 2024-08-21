import React from "react";
import styles from './auth.module.css';

export const experimental_ppr = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.auth}>
      {children}
    </div>
  )
}

export default Layout;