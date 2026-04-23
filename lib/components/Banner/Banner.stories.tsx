import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '../Page';
import {
  Banner,
  type BannerColor,
  BannerColorEnum,
  type BannerProps,
  type BannerVariant,
  BannerVariantEnum,
} from './Banner';

const meta = {
  title: 'Banner/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {},
  args: {
    sticky: true,
    closeTitle: 'Lukk',
    onClose: () => console.log('Banner closed'),
    title: (
      <>
        19. juni skrus gamle Altinn av. <a href="https://altinn.no">Dette må du passe på</a>.
      </>
    ),
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WarningBanner: Story = {
  args: {
    color: 'warning',
    variant: 'alert',
    title: (
      <>
        19. juni skrus gamle Altinn av. <a href="https://altinn.no">Dette må du passe på</a>.
      </>
    ),
  },
};

export const WarningExpanded: Story = {
  args: {
    color: 'warning',
    variant: 'alert',
    title: '19. juni skrus gamle Altinn av.',
    body: (
      <>
        <ul>
          <li> 31. mai slettes påbegynte skjemaer fra utkast i gammel innboks.</li>
          <li>19. juni skrus gamle Altinn av og du må begynne å ta i bruk ny innboks.</li>
        </ul>

        <p>
          <a href="https://altinn.no">Mer informasjon.</a>
        </p>
      </>
    ),
  },
};

export const InfoBanner: Story = {
  args: {
    color: 'info',
    variant: 'info',
    title: (
      <>
        19. juni skrus gamle Altinn av. <a href="https://altinn.no">Dette må du passe på</a>.
      </>
    ),
  },
};

export const InfoExpanded: Story = {
  args: {
    color: 'info',
    variant: 'info',
    title: '19. juni skrus gamle Altinn av.',
    body: (
      <>
        <ul>
          <li> 31. mai slettes påbegynte skjemaer fra utkast i gammel innboks.</li>
          <li>19. juni skrus gamle Altinn av og du må begynne å ta i bruk ny innboks.</li>
        </ul>

        <p>
          <a href="https://altinn.no">Mer informasjon.</a>
        </p>
      </>
    ),
  },
};

export const ErrorBanner: Story = {
  args: {
    color: 'danger',
    variant: 'error',
    title: (
      <>
        19. juni skrus gamle Altinn av. <a href="https://altinn.no">Dette må du passe på</a>.
      </>
    ),
  },
};

export const ErrorExpanded: Story = {
  args: {
    color: 'danger',
    variant: 'error',
    title: '19. juni skrus gamle Altinn av.',
    body: (
      <>
        <ul>
          <li> 31. mai slettes påbegynte skjemaer fra utkast i gammel innboks.</li>
          <li>19. juni skrus gamle Altinn av og du må begynne å ta i bruk ny innboks.</li>
        </ul>

        <p>
          <a href="https://altinn.no">Mer informasjon.</a>
        </p>
      </>
    ),
  },
};

export const Colors = (args: BannerProps) => {
  const colors = Object.keys(BannerColorEnum) as BannerColor[];
  const variants = Object.keys(BannerVariantEnum) as BannerVariant[];

  return (
    <Flex direction="col" spacing={3}>
      {colors.map((color) => {
        return variants.map((variant) => <Banner {...args} color={color} variant={variant} key={variant} />);
      })}
    </Flex>
  );
};
