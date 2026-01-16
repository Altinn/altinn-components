import { InformationSquareIcon } from '@navikt/aksel-icons';
import { Button, type ButtonProps } from '.';
import styles from './floatingActionButton.module.css';

export const FloatingActionButton = ({
  variant = 'solid',
  size,
  color,
  onClick,
  onBlurCapture,
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      icon
      className={styles.button}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      onBlurCapture={onBlurCapture}
      aria-label={props['aria-label']}
    >
      {props.children || <InformationSquareIcon />}
    </Button>
  );
};
