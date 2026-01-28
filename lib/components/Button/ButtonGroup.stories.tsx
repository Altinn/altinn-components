import { BookmarkIcon, ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { SearchField } from '../Forms/SearchField';
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

export const ComboButton = () => {
  return (
    <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>
        <XMarkIcon />
      </Button>
    </ButtonGroup>
  );
};

export const Toolbar = () => {
  return (
    <ButtonGroup size="xs">
      <Button>
        <span>Menu</span>
        <ChevronUpDownIcon />
      </Button>
      <SearchField placeholder="Search" />
      <ButtonGroup connected variant="tinted">
        <Button variant="tinted">Filter</Button>
        <ButtonGroupDivider variant="tinted" />
        <Button variant="tinted">
          <XMarkIcon />
        </Button>
      </ButtonGroup>
      <Button variant="outline">
        <PlusIcon />
        <span>Add</span>
      </Button>
      <Button variant="ghost">
        <BookmarkIcon />
        <span>Save</span>
      </Button>
    </ButtonGroup>
  );
};
