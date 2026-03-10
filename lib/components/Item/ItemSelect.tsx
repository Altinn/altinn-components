import { Button, Input } from '../';

export interface ItemSelectProps {
    selected?: boolean;
    onClick?: () => void;
};

/**
 * List item checkbox
 */

export const ItemSelect = ({ selected, onClick }: ItemSelectProps) => {
    return (
        <Button size="xs" variant="ghost" icon rounded onClick={onClick}>
            <Input type="checkbox" size="xs" checked={selected} style={{ pointerEvents: "none" }} />
        </Button>
    );
};
