import React, { ReactNode } from "react";
import styles from "./theme.module.css";

export const ThemeProvider = <Theme,>({
  children,
  theme,
}: {
  children?: ReactNode;
  theme?: Theme;
}) => {
  return (
    <div className={styles.theme} data-theme={theme}>
      {children}
    </div>
  );
};
