import { ActivityLog, Section, Toolbar } from '..';
import { useActivityLog } from '../../../examples';

const meta = {
  title: 'ActivityLog',
  tags: ['beta'],
  parameters: {},
  args: {},
};

export default meta;

export const Default = () => {
  const { toolbar, items } = useActivityLog();
  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>
  );
};
