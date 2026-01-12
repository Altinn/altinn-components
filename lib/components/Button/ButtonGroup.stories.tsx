import type { Meta } from '@storybook/react-vite';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDivider } from './ButtonGroupDivider';

const meta = {
  title: 'Button/ButtonGroup',
  component: ButtonGroup,
  parameters: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = () => {
  return (
    <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  );
};

export const Connected = () => {
  return (
    <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  );
};

export const WithDivider = () => {
  return (
    <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>
  );
};
