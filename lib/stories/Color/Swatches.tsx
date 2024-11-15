import type { LayoutTheme } from '../../components';
import colors from './colors.json';
import styles from './swatches.module.css';

const themes = {
  neutral: 'Neutral',
  person: 'Person',
  company: 'Company',
};

export interface SwatchesProps {
  theme: LayoutTheme;
}

export const SwatchesList = ({ theme }: SwatchesProps) => {
  return (
    <div className={styles.list} data-theme={theme}>
      {Object.keys(colors).map((key) => {
        const style = {
          backgroundColor: 'var(--theme-' + key + ')',
        };

        return (
          <section className={styles.item}>
            <div style={style} className={styles.swatch}></div>
            {key}
          </section>
        );
      })}
    </div>
  );
};

export const Swatches = ({ theme }: SwatchesProps) => {
  return (
    <div className={styles.row}>
      {Object.keys(themes).map((key) => {
        return <SwatchesList theme={key} />;
      })}
    </div>
  );
};
