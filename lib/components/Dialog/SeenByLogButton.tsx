import { MetaItem, MetaItemLabel, type MetaItemProps } from '..';

export interface SeenByLogButtonProps extends MetaItemProps {
  className?: string;
  onClick?: () => void;
}

/**
 * SeenByLog Button
 */

export const SeenByLogButton = ({ as, icon, children, className, onClick }: SeenByLogButtonProps) => {
  return (
    <MetaItem as={as} size="xs" className={className} icon={icon} onClick={onClick}>
      {children && <MetaItemLabel size="xs">{children}</MetaItemLabel>}
    </MetaItem>
  );
};
