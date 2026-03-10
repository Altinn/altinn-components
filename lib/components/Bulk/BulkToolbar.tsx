import { BulkToolbarButton, type BulkToolbarButtonProps } from "./BulkToolbarButton"
import styles from "./bulkToolbar.module.css";

export interface BulkToolbarProps {
    items?: BulkToolbarButtonProps[];
}

export const BulkToolbar = ({ items }: BulkToolbarProps) => {

    return (
        <div className={styles.toolbar}>
            {items?.map((item, index) => (
                <BulkToolbarButton key={index} icon={item.icon} label={item.label} />
            ))}
        </div>
    )

};
