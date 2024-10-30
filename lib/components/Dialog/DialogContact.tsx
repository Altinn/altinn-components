import type { ReactNode } from "react";
import { Button } from "../Button";
import Markdown from "react-markdown";
import styles from "./dialogContact.module.css";

export interface ContactLink {
  type: string;
  value: string;
  label: string;
}

export interface DialogContactProps {
  title?: string;
  items?: ContactLink[];
  children?: string;
}

const ContactButton = ({ type, value, label }) => {
  return (
    <Button reverse icon="phone">
      {value}
    </Button>
  );
};

export const DialogContact = ({
  title = "Kontakt oss",
  items,
  children,
}: DialogContactProps) => {
  if (!children) {
    return null;
  }

  return (
    <section className={styles?.section}>
      <h2 className={styles?.title}>{title}</h2>
      <Markdown>{children}</Markdown>
      {items ? (
        <div className={styles?.items}>
          {items?.map((item) => (
            <>
              xxx
              <ContactButton {...item} key={item.value} />
            </>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
