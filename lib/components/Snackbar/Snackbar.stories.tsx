import type { Meta } from '@storybook/react-vite';
import { Button } from '../Button';
import { Flex } from '../Page';
import { Snackbar } from './Snackbar.tsx';
import { useSnackbar } from './useSnackbar.tsx';

const meta = {
  title: 'Layout/Snackbar',
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
      <Flex direction="row" spacing={3}>
        <Button
          onClick={() =>
            openSnackbar({
              message: 'Message',
              color: 'danger',
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
              color: 'company',
              duration: 1000,
              dismissable: true,
            })
          }
        >
          Company
        </Button>
        <Button
          onClick={() =>
            openSnackbar({
              message: 'Message',
              color: 'danger',
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
