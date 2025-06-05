import type { Meta } from '@storybook/react-vite';
import { List, Transmission, type TransmissionProps } from '..';
import { transmissions } from '../../../examples';

const transmissionProps = transmissions as TransmissionProps[];
const meta = {
  title: 'Inbox/Transmission',
  component: Transmission,
  tags: ['beta'],
  parameters: {},
  args: {
    ...transmissionProps[0],
  },
} satisfies Meta<typeof Transmission>;

export default meta;

export const Default = () => {
  return (
    <List spacing={2}>
      <Transmission {...(transmissions[0] as TransmissionProps)} />
    </List>
  );
};

export const UsingBadges = () => {
  return (
    <List spacing={2}>
      {transmissionProps.map((props) => (
        <Transmission {...props} key={props.id} />
      ))}
    </List>
  );
};
