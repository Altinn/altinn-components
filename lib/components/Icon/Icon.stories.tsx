import { InboxFillIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Icon, type IconProps, type IconSize, SizeEnum } from '..';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {},
  args: {
    svgElement: InboxFillIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Sizes = (args: IconProps) => {
  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return <Icon {...args} size={size as IconSize} theme="tinted" key={size} />;
      })}
    </Flex>
  );
};
