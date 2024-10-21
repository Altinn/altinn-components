import cx from "classnames";
import styles from "./icon.module.css";
import { SvgIcon } from "./SvgIcon";
import { iconsMap } from "./";

export type IconVariant = "solid" | "outline";

interface IconProps {
  name: keyof typeof iconsMap;
  variant?: IconVariant;
  className?: string;
}

export const Icon = ({ name, variant = "outline", className }: IconProps) => {
  /*

  const svgIcon: JSX.Element | undefined =
    (iconsMap[name] as { [key in IconVariant]: JSX.Element })[variant] ??
    iconsMap[name];

  if (!svgIcon) {
    return <span className={cx([styles.icon], className)}>{name}</span>;
  }

  */

  let svgIcon;

  if (iconsMap[name]) {
    if (variant && iconsMap[name][variant]) {
      svgIcon = iconsMap[name][variant];
    } else if (iconsMap[name]) {
      svgIcon = iconsMap[name];
    }
  } else if (name) {
    return <span>{name}</span>;
  }

  return (
    <SvgIcon
      svgIconComponent={svgIcon}
      className={cx([styles.icon], className)}
    />
  );
};
