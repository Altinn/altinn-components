import type { Meta } from '@storybook/react';
import { ListBase, Transmission, type TransmissionProps } from '..';
import { transmissions } from '../../../examples';

const transmissionProps = transmissions as TransmissionProps[];
const meta = {
  title: 'Transmission/Transmission',
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
    <ListBase spacing={2}>
      <Transmission {...(transmissions[0] as TransmissionProps)} />
    </ListBase>
  );
};

export const UsingBadges = () => {
  return (
    <ListBase spacing={2}>
      {transmissionProps.map((props) => (
        <Transmission {...props} key={props.id} />
      ))}
    </ListBase>
  );
};
