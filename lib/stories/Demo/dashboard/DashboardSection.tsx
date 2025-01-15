import { Button, Flex, Grid, Heading, ListItem, PageBase, Section, Typography } from '../../../components';

export const DashboardSection = ({ bg = 'surface-default', children }) => {
  return (
    <Section theme={bg} padding="page" spacing={4} bleed>
      {children}
    </Section>
  );
};
