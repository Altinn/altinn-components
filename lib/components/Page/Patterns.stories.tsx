import { Heading, ListBase, ListItem, PageBase, PageHeader } from '..';

const meta = {
  title: 'Page/Patterns',
  tags: ['beta'],
  parameters: {},
  args: {
    title: 'Page title',
  },
};

export default meta;

export const UserAndLists = () => {
  return (
    <PageBase theme="subtle">
      <PageHeader
        variant="card"
        avatar={{ name: 'Kari Nordmann' }}
        title="Kari Nordmann"
        description="Daglig leder"
        tabs={{
          items: [
            {
              id: '1',
              title: 'Tab 1',
              selected: true,
            },
            {
              id: '2',
              title: 'Tab 2',
            },
            {
              id: '3',
              title: 'Tab 3',
            },
          ],
        }}
      />
      <Heading size="lg">Heading lg</Heading>
      <ListBase>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListBase>
    </PageBase>
  );
};
