'use client';
import type { MouseEventHandler } from 'react';
import { useRef, useState } from 'react';
import { useClickOutside, useEscapeKey } from '../../hooks';
import { ButtonBase, ButtonIcon } from '../Button';
import type { ButtonColor, ButtonIconProps, ButtonSize, ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import type { SvgElement } from '../Icon';

import styles from './floatingDropdown.module.css';

export interface FloatingDropdownItem {
  icon: SvgElement;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface FloatingDropdownProps {
  icon: ButtonIconProps['icon'];
  iconOpen?: ButtonIconProps['icon'];
  iconSize?: ButtonSize;
  iconAltText: string;
  items: FloatingDropdownItem[];
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  dataTestId?: string;
}

export const FloatingDropdown = ({
  variant = 'solid',
  size,
  icon,
  iconOpen,
  iconSize,
  iconAltText,
  color = 'company',
  items,
  dataTestId,
}: FloatingDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleItemClick = (itemOnClick: MouseEventHandler<HTMLButtonElement>) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      itemOnClick(e);
      handleClose();
    };
  };

  useClickOutside(dropdownRef, handleClose);
  useEscapeKey(handleClose);

  const currentIcon = isOpen && iconOpen ? iconOpen : icon;

  return (
    <div className={styles.container} ref={dropdownRef}>
      {isOpen && (
        <div className={styles.dropdown} data-color={color}>
          {items.map((item, index) => (
            <button key={index} className={styles.dropdownItem} onClick={handleItemClick(item.onClick)} type="button">
              <Icon svgElement={item.icon} size="md" color="inherit" />
              <span className={styles.itemTitle}>{item.title}</span>
            </button>
          ))}
        </div>
      )}
      <ButtonBase
        className={styles.button}
        variant={variant}
        color={color}
        size={size}
        onClick={handleToggle}
        data-testid={dataTestId}
        aria-label={iconAltText}
        aria-expanded={isOpen}
      >
        {currentIcon && <ButtonIcon icon={currentIcon} size={iconSize} />}
      </ButtonBase>
    </div>
  );
};
