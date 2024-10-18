import styles from "./toolbarSearch.module.css";

export const ToolbarSearch = ({
  value,
  name,
  placeholder = "Søk",
  title = "Skriv inn søkekriterier",
  onChange,
}: ToolbarSearch) => {
  return (
    <div className={styles.field}>
      <input
        type="search"
        value={value}
        name={name}
        placeholder={placeholder}
        title={title}
        className={styles.input}
      ></input>
    </div>
  );
};
