import cx from 'classnames';
import type { ReactNode } from 'react';
import { ButtonBase, ButtonIcon, ButtonLabel } from '..';
import type { ButtonBaseProps, SvgElement } from '..';
import styles from './timelineLink.module.css';

export interface TimelineLinkProps extends Partial<ButtonBaseProps> {
  icon?: SvgElement;
  reverse?: boolean;
  label?: string | ReactNode;
  children?: ReactNode;
}

export const TimelineLink = ({
  size = 'custom',
  color = 'company',
  icon,
  reverse,
  label,
  children,
  ...rest
}: TimelineLinkProps) => {
  return (
    <ButtonBase
      color={color}
      variant="link"
      size={size}
      className={cx(styles.button, { [styles.reverse]: reverse })}
      {...rest}
    >
      {icon && <ButtonIcon className={styles.icon} size={size} icon={icon} />}
      <ButtonLabel className={styles.label} size={size}>
        {children || label}
      </ButtonLabel>
    </ButtonBase>
  );
};
