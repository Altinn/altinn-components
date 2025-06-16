import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '../Page';
import { Banner, type BannerColor, BannerColorEnum, type BannerProps } from './Banner';

const meta = {
  title: 'Banner/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {},
  args: {
    sticky: true,
    closeTitle: 'Lukk',
    onClose: () => console.log('Banner closed'),
    text: `Du ser nå på en beta-versjon av nye Altinn Innboks i et testmiljø. Alt innhold du ser her er basert på
          testdata og kun ment for demonstrasjon.`,
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Colors = (args: BannerProps) => {
  const colors = Object.keys(BannerColorEnum) as BannerColor[];

  return (
    <Flex direction="col" spacing={3}>
      {colors.map((color) => (
        <Banner {...args} color={color} key={color} />
      ))}
    </Flex>
  );
};
