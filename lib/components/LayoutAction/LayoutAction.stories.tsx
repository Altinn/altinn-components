import { ArchiveIcon, ArrowRedoIcon, EyeIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Button, Flex, Layout, LayoutAction, type LayoutActionProps } from '..';
import { footer, header } from '../../../examples';

const meta: Meta<typeof LayoutAction> = {
  title: 'Layout/LayoutAction',
  component: LayoutAction,
  tags: ['beta'],
  parameters: {},
  args: {
    title: '3 av 24 valgt',
    menu: {
      items: [
        {
          id: '1',
          icon: ArrowRedoIcon,
          title: 'Del og gi tilgang',
        },
        {
          id: '2',
          icon: EyeIcon,
          title: 'Marker som lest',
        },
        {
          id: '3',
          icon: ArchiveIcon,
          title: 'Flytt til arkiv',
        },
        {
          id: '4',
          icon: TrashIcon,
          title: 'Flytt til papirkurv',
        },
      ],
    },
  },
};

export default meta;

export const Default = (args: LayoutActionProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
      <Layout header={header} footer={footer}>
        <LayoutAction {...args} hidden={hidden} onDismiss={() => setHidden(true)}>
          <Flex align="center" justify="center" style={{ height: '100%' }}>
            <Button color="inherit" variant="outline" onClick={() => setHidden((prevState) => !prevState)}>
              Toggle action
            </Button>
          </Flex>
        </LayoutAction>
      </Layout>
    </div>
  );
};
