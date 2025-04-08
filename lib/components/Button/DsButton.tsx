import { Button, type ButtonProps } from "@digdir/designsystemet-react";
import styles from "./DsButton.module.css";

export type buttonTypes = 'solid' | 'outline' | 'dotted' | 'text';

export interface DsButtonProps extends Omit<ButtonProps, "variant"> {
    variant?: buttonTypes;
}

const mapVariant = (variant: buttonTypes) : ButtonProps["variant"]  => {
  switch (variant) {
    case "solid":
      return "primary";
    case "outline":
      return "secondary";
    case "dotted":
      return "secondary";
    case "text":
      return "tertiary";
    default:
      return "primary";
  }
}

export const DsButton = ({variant = "solid", ...props}: DsButtonProps) => {
  return <Button className={`${variant === "dotted" && styles.dotted}`} variant={mapVariant(variant)} {...props} />;
};
