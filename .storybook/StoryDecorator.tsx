import React, { ReactNode } from "react";
import styles from "./storyDecorator.module.css";

interface StoryDecoratorProps {
  tags: string[];
  theme: string;
  children: ReactNode;
}

export const StoryDecorator = ({
  tags,
  theme,
  children,
}: StoryDecoratorProps) => {
  const isStable = (tags || []).includes("stable");
  const state = isStable ? "stable" : "experimental";

  return (
    <div className={styles.preview} data-theme={theme}>
      <span className={styles.tag} data-tag={state}>
        {state}
      </span>

      <div className={styles.component}>{children}</div>
    </div>
  );
};
