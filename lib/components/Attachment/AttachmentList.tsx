import styles from "./AttachmentList.module.css";
import { AttachmentLink, type AttachmentLinkProps } from "./AttachmentLink";
import type { TypographySize } from "../Typography";

export interface AttachmentListProps {
  size?: TypographySize;
  items?: AttachmentLinkProps[];
}

export const AttachmentList = ({ size, items }: AttachmentListProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={styles?.list} data-size={size}>
      {items?.map((item, index) => {
        return (
          <li key={index} className={styles?.item}>
            <AttachmentLink {...item} key={"attachment" + index} />
          </li>
        );
      })}
    </ul>
  );
};
