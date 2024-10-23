import cx from "classnames";
import styles from "./icon.module.css";
import { SvgIcon } from "./SvgIcon";
import {type IconName , iconsMap} from "./";

export type IconVariant = "solid" | "outline";

interface IconProps {
  name: IconName;
  variant?: IconVariant;
  className?: string;
}

export const Icon = ({ name, variant = "outline", className }: IconProps) => {
  const svgIcon: JSX.Element | undefined =
    (iconsMap[name] as { [key in IconVariant]: JSX.Element })?.[variant] ??
    iconsMap[name]?.outline;

  if (!svgIcon) {
    return <span className={cx([styles.icon], className)}/>
  }

  return (
    <SvgIcon
      svgIconComponent={svgIcon}
      className={cx([styles.icon], className)}
    />
  );
};
