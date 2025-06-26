import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Flex } from '../Page';
import { Modal, type ModalProps } from './Modal';
import { ModalHeader } from './ModalHeader.tsx';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </Modal>
      </Flex>
    );
  },
};

export const Content: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} variant="content">
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </Modal>
      </Flex>
    );
  },
};

export const Full: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} variant="full">
          <ModalHeader title="This is a modal" onClose={() => setOpen(false)} />
          <p>This is some content</p>
        </Modal>
      </Flex>
    );
  },
};
