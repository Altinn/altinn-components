import type { Meta } from '@storybook/react-vite';
import { DatepickerFilter } from '../Toolbar/DatepickerFilter';
import { Datepicker } from './Datepicker';

const meta = {
  title: 'Datepicker/Accessibility',
  parameters: {
    a11y: { test: 'error' },
  },
} satisfies Meta;

export default meta;

export const Calendar = {
  render: () => (
    <Datepicker defaultDate="2024-05-02" selectFrom="2024-05-02" selectTo="2024-05-10" onSelect={() => {}} />
  ),
};

export const RangeFilter = {
  render: () => <DatepickerFilter formData={{ fromDate: '2024-05-02', toDate: '2024-05-10' }} />,
};
