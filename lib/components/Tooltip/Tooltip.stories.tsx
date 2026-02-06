import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { Button, ButtonGroup } from '../Button';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Next/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Tooltip>;

export default meta;

export const ButtonTooltip = () => {
  return (
    <ButtonGroup size="xs">
      <Button variant="outline">Edit</Button>
      <Tooltip content="Flere valg">
        <Button rounded icon variant="tertiary">
          <MenuElipsisHorizontalIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};
