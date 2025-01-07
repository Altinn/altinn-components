import type { Meta } from '@storybook/react';
import { Button } from '../Button';
import { Flex } from '../Page';
import { Snackbar } from './Snackbar.tsx';
import { useSnackbar } from './useSnackbar.tsx';

const meta = {
  title: 'Snackbar/Snackbar',
  component: Snackbar,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Snackbar>;

export default meta;

export const Default = () => {
  const { openSnackbar } = useSnackbar();

  return (
    <div>
      <Flex direction="row" spacing="md">
        <Button
          onClick={() =>
            openSnackbar({
              message: 'Message',
              color: 'alert',
              duration: 1000,
              dismissable: true,
            })
          }
        >
          Alert
        </Button>
        <Button
          onClick={() =>
            openSnackbar({
              message: 'This is a longer message',
              color: 'accent',
              duration: 1000,
              dismissable: true,
            })
          }
        >
          Accent
        </Button>
        <Button
          onClick={() =>
            openSnackbar({
              message: 'Message',
              color: 'alert',
              duration: 1000 * 10,
              dismissable: false,
            })
          }
        >
          Non-dismissable, 10 seconds
        </Button>
      </Flex>
      <Snackbar />
    </div>
  );
};
