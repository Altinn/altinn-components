import { BulkMenuButton, type BulkMenuButtonProps } from "./BulkMenuButton"
import styles from "./bulkMenu.module.css";

export interface BulkMenuProps {
    items?: BulkMenuButtonProps[];
}

export const BulkMenu = ({ items }: BulkMenuProps) => {

    return (
        <div className={styles.toolbar}>
            {items?.map((item, index) => (
                <BulkMenuButton key={index} icon={item.icon} label={item.label} />
            ))}
        </div>
    )

};
