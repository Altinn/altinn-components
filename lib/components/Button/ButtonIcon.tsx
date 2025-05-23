import cx from 'classnames';
import { type ReactNode, isValidElement } from 'react';
import { type ButtonSize, Icon, type IconProps, type SvgElement, isIconProps } from '..';
import styles from './buttonIcon.module.css';

export interface ButtonIconProps {
  icon: IconProps | SvgElement;
  iconAltText?: string;
  size?: ButtonSize;
  altText?: string;
  className?: string;
}

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export const ButtonIcon = ({ icon, size, iconAltText, className }: ButtonIconProps) => {
  return (
    <span className={cx(styles.wrapper, className)} data-size={size} aria-label={iconAltText}>
      {(isIconProps(icon) && <Icon {...(icon as IconProps)} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon svgElement={icon as SvgElement} className={styles.icon} />}
    </span>
  );
};
