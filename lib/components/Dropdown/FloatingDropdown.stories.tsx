import { ArrowLeftIcon, InformationSquareIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatingDropdown } from './FloatingDropdown';

const meta: Meta<typeof FloatingDropdown> = {
  title: 'Components/Dropdown/FloatingDropdown',
  component: FloatingDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    icon: PlusIcon,
    iconAltText: 'Actions menu',
    items: [
      {
        icon: InformationSquareIcon,
        title: 'Vis nye funksjoner',
        onClick: () => console.log('Show new features'),
      },
      {
        icon: ArrowLeftIcon,
        title: 'Ta meg tilbake',
        onClick: () => console.log('Go back'),
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Neutral: Story = {
  args: {
    color: 'neutral',
  },
};

export const Company: Story = {
  args: {
    color: 'company',
  },
};

export const Person: Story = {
  args: {
    color: 'person',
  },
};

export const WithManyItems: Story = {
  args: {
    items: [
      {
        icon: InformationSquareIcon,
        title: 'Vis nye funksjoner',
        onClick: () => console.log('Show new features'),
      },
      {
        icon: ArrowLeftIcon,
        title: 'Ta meg tilbake',
        onClick: () => console.log('Go back'),
      },
      {
        icon: PlusIcon,
        title: 'Legg til',
        onClick: () => console.log('Add'),
      },
      {
        icon: InformationSquareIcon,
        title: 'Informasjon',
        onClick: () => console.log('Info'),
      },
    ],
  },
};

export const WithDifferentIcon: Story = {
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company',
  },
};
