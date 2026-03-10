import { Button, ButtonIcon, ButtonLabel } from "../Button";
import { SvgElement } from "../Icon";
import styles from "./bulkToolbarButton.module.css";

export interface BulkToolbarButtonProps {
    id?: string;
    icon: SvgElement;
    label: string;
    onClick?: () => void;
}

export const BulkToolbarButton = ({ icon, label, onClick }: BulkToolbarButtonProps) => {
    return (
        <Button className={styles.button} onClick={onClick}>
            <ButtonIcon className={styles.icon} icon={icon} />
            <ButtonLabel className={styles.label} size="sm">{label}</ButtonLabel>
        </Button>
    )
}