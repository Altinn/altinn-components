import { ArchiveIcon, ArrowRedoIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogLayout } from './DialogLayout';

const meta = {
  title: 'Inbox/Dialog/DialogLayout',
  component: DialogLayout,
  tags: ['beta'],
  parameters: {},
} satisfies Meta<typeof DialogLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked'),
    },
    pageMenu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
          as: 'button',
          onClick: () => console.log('Share clicked'),
        },
        {
          id: '2',
          icon: EyeClosedIcon,
          title: 'Marker som ulest',
          as: 'button',
          onClick: () => console.log('Mark unread clicked'),
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
          as: 'button',
          onClick: () => console.log('Archive clicked'),
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
          as: 'button',
          onClick: () => console.log('Delete clicked'),
        },
      ],
    },
    children: (
      <div>
        <h1>Dialog Title</h1>
        <p>This is the dialog content. Hover over the page menu buttons above to test the hover states.</p>
      </div>
    ),
  },
};

export const WithAnchors: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked'),
    },
    pageMenu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
          href: '#share',
        },
        {
          id: '2',
          icon: EyeClosedIcon,
          title: 'Marker som ulest',
          href: '#mark-unread',
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
          href: '#archive',
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
          href: '#delete',
        },
      ],
    },
    children: (
      <div>
        <h1>Dialog Title</h1>
        <p>
          This example uses anchor elements instead of buttons. Hover over the page menu items to test the hover states.
        </p>
      </div>
    ),
  },
};

export const MixedButtonsAndAnchors: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked'),
    },
    pageMenu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
          as: 'button',
          onClick: () => console.log('Share clicked'),
        },
        {
          id: '2',
          icon: EyeClosedIcon,
          title: 'Marker som ulest',
          href: '#mark-unread',
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
          as: 'button',
          onClick: () => console.log('Archive clicked'),
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
          href: '#delete',
        },
      ],
    },
    children: (
      <div>
        <h1>Dialog Title</h1>
        <p>This example mixes buttons and anchors. All items should have working hover states.</p>
      </div>
    ),
  },
};

export const WithBaseTheme: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked'),
    },
    pageMenu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
          as: 'button',
          onClick: () => console.log('Share clicked'),
        },
        {
          id: '2',
          icon: EyeClosedIcon,
          title: 'Marker som ulest',
          as: 'button',
          onClick: () => console.log('Mark unread clicked'),
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
          as: 'button',
          onClick: () => console.log('Archive clicked'),
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
          as: 'button',
          onClick: () => console.log('Delete clicked'),
        },
      ],
    },
    children: (
      <div>
        <h1>Dialog Title</h1>
        <p>
          This example uses the base theme. Hover over the page menu buttons to test the hover states with the base
          theme.
        </p>
      </div>
    ),
  },
};

export const WithContextMenu: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
      onClick: () => console.log('Back clicked'),
    },
    contextMenu: {
      items: [
        {
          id: '1',
          label: 'Alternativ 1',
          onClick: () => console.log('Option 1 clicked'),
        },
        {
          id: '2',
          label: 'Alternativ 2',
          onClick: () => console.log('Option 2 clicked'),
        },
      ],
    },
    pageMenu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
          as: 'button',
          onClick: () => console.log('Share clicked'),
        },
        {
          id: '2',
          icon: EyeClosedIcon,
          title: 'Marker som ulest',
          as: 'button',
          onClick: () => console.log('Mark unread clicked'),
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
          as: 'button',
          onClick: () => console.log('Archive clicked'),
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
          as: 'button',
          onClick: () => console.log('Delete clicked'),
        },
      ],
    },
    children: (
      <div>
        <h1>Dialog Title</h1>
        <p>
          This example includes both a context menu and page menu. Hover over the page menu buttons to test the hover
          states.
        </p>
      </div>
    ),
  },
};
