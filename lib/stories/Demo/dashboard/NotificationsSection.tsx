import { DashboardSection, NotificationsItem } from '..';
import { Button, Flex, Grid, Heading, ListBase, PageBase, Section, Typography } from '../../../components';

export const NotificationsSection = ({ title = 'Ingen varslinger', items }) => {
  return (
    <DashboardSection theme="surface-active">
      <ListBase spacing={2}>
        {items?.map((item) => {
          return <NotificationsItem avatar={item?.avatar} title={item?.message} description="7 dager siden" />;
        })}
      </ListBase>
    </DashboardSection>
  );
};
