import type { Meta } from '@storybook/react-vite';
import { List, Transmission, type TransmissionProps } from '..';
import { transmissions } from '../../../examples';
import { digdir } from '../../../examples/avatar/digdir';

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

export const WithWideLogo = () => {
  const transmissionWithWideLogo: TransmissionProps = {
    id: 'wide-logo-test',
    type: { value: 'acceptance', label: 'Godkjent' },
    byline: 'I dag kl. 14.30',
    sender: digdir,
    createdAt: new Date().toISOString(),
    createdAtLabel: 'I dag kl. 14.30',
    title: 'Test med bred logo (Digdir)',
    summary: 'Dette er en test for å se at brede logoer fungerer korrekt i transmissions.',
    badge: {
      color: 'company',
    },
  };

  return (
    <List spacing={2}>
      <Transmission {...transmissionWithWideLogo} />
    </List>
  );
};
