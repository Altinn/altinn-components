import { Toolbar, type ToolbarProps } from '../Toolbar';
import { type TransmissionItemProps, TransmissionList } from '../Transmission';
import { Heading } from '../Typography';

export interface DialogTransmissionsProps {
  title?: string;
  items?: TransmissionItemProps[];
  toolbar?: ToolbarProps;
}

export const DialogTransmissions = ({ title = 'Transmissions', items, toolbar }: DialogTransmissionsProps) => {
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
