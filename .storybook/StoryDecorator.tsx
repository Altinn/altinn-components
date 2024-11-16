import {ReactNode} from "react";
import styles from "./storyDecorator.module.css";
import {RootProvider} from "../lib/components/RootProvider/";

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
      <RootProvider>
          <div className={styles.preview} data-theme={theme}>
              <div id="story-in-story-decorator-root" className={styles.component}>{children}</div>
              <span className={styles.tag} data-tag={state}>
                  {state}
              </span>
          </div>
      </RootProvider>
  );
};
