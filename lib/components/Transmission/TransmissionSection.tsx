import { Toolbar, type ToolbarProps } from '../Toolbar';
import { type TransmissionItemProps, TransmissionList } from '../Transmission';
import { Heading } from '../Typography';

export interface TransmissionSectionProps {
  title?: string;
  items?: TransmissionItemProps[];
  toolbar?: ToolbarProps;
}

export const TransmissionSection = ({ title = 'Transmissions', items, toolbar }: TransmissionSectionProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <Heading as="h2" size="xs">
        {title}
      </Heading>
      {toolbar && <Toolbar {...toolbar} />}
      <TransmissionList items={items} />
    </section>
  );
};
