import { Tooltip as DsTooltip, type TooltipProps as DsTooltipProps, type Size } from '@digdir/designsystemet-react';

export type TooltipProps = {
  children: React.ReactNode;
  content: string;
  /**
   * @deprecated Has no effect. The tooltip bubble is shared and sized globally in `global.css`;
   * this prop used to end up on the trigger element instead.
   */
  size?: Size;
} & Omit<DsTooltipProps, 'content | children'>;

export const Tooltip = ({ placement, children, content }: TooltipProps) => {
  if (!content) {
    return children;
  }

  return (
    <DsTooltip content={content} placement={placement}>
      {children}
    </DsTooltip>
  );
};
