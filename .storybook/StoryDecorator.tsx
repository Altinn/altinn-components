import {ReactNode} from "react";
import styles from "./storyDecorator.module.css";
import {RootProvider} from "../lib";

interface StoryDecoratorProps {
  tags: string[];
  theme: string;
  children: ReactNode;
}

export const StoryDecorator = ({
  theme,
  children,
}: StoryDecoratorProps) => {
  return (
      <RootProvider>
          <div className={styles.preview} data-theme={theme}>
              <div id="story-in-story-decorator-root" className={styles.component}>{children}</div>
          </div>
      </RootProvider>
  );
};
