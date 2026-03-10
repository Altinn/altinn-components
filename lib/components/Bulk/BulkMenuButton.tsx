import { Button, ButtonIcon, ButtonLabel } from "../Button";
import { SvgElement } from "../Icon";
import styles from "./bulkMenuButton.module.css";

export interface BulkMenuButtonProps {
    id?: string;
    icon: SvgElement;
    label: string;
    onClick?: () => void;
}

export const BulkMenuButton = ({ icon, label, onClick }: BulkMenuButtonProps) => {
    return (
        <Button className={styles.button} onClick={onClick}>
            <ButtonIcon className={styles.icon} icon={icon} />
            <ButtonLabel className={styles.label} size="sm">{label}</ButtonLabel>
        </Button>
    )
}