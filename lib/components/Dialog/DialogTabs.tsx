import { PageTabs, type PageTabsProps } from '..';

export interface DialogTabsProps extends PageTabsProps {}

export const DialogTabs = ({ id = 'dialog-tabs', items = [] }: DialogTabsProps) => {
  return <PageTabs id={id} items={items} />;
};
