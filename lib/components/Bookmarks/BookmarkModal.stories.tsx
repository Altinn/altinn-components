import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { BookmarkModal, type BookmarkModalProps, Button } from '..';

const meta: Meta<typeof BookmarkModal> = {
  title: 'Bookmarks/BookmarkModal',
  component: BookmarkModal,
  args: {
    title: 'Lagre søk',
    params: [
      {
        type: 'search',
        label: 'skatt',
      },
      {
        type: 'filter',
        label: 'Krever handling',
      },
    ],
    titleField: {
      placeholder: 'Uten navn',
    },
    buttons: [
      {
        label: 'Lagre',
      },
      {
        label: 'Avbryt',
        variant: 'outline',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = (args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>
  );
};
