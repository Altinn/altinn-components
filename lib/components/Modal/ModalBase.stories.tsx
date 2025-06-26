import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Flex } from '../Page';
import { ModalBase, type ModalBaseProps, ModalHeader } from './';

const meta: Meta<typeof ModalBase> = {
  title: 'Components/Modal',
  component: ModalBase,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ModalBase>;

export const Default: Story = {
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)}>
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </ModalBase>
      </Flex>
    );
  },
};

export const NoContent: Story = {
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)}>
          <p>This is some content</p>
        </ModalBase>
      </Flex>
    );
  },
};

export const Content: Story = {
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="content">
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </ModalBase>
      </Flex>
    );
  },
};

export const Full: Story = {
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="full">
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </ModalBase>
      </Flex>
    );
  },
};
