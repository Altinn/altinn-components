import { type TransmissionItemProps, TransmissionList } from '../Transmission';
import { Toolbar, type ToolbarSearchProps, type ToolbarFilterProps } from '../Toolbar';
import { Heading } from '../Typography';

export interface TransmissionSectionProps {
  search?: ToolbarSearchProps;
  filters?: ToolbarFilterProps;
  title?: string;
  items?: TransmissionItemProps[];
}

export const TransmissionSection = ({ search, filters, title = 'Transmissions', items }: TransmissionSectionProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <Heading as="h2" size="xs">
        {title}
      </Heading>
      {(search || filters) && <Toolbar search={search} filters={filters} />}

      <TransmissionList items={items} />
    </section>
  );
};
