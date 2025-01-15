import { Grid, ListItem } from '../../../components';

export const CategoryGrid = ({ items }) => {
  return (
    <Grid color="company" spacing={3} cols="1-2-3">
      {items.map((item) => (
        <ListItem key={item.id} {...item} theme="surface" size="xl" />
      ))}
    </Grid>
  );
};
