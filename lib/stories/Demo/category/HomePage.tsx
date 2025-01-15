import { CategoryGrid, useNavigation } from '..';
import { Heading, ListBase, ListItem, PageBase, Section } from '../../../components';
import { services, sitemap } from '../data';
export const HomePage = () => {
  const { pageId, setPageId } = useNavigation();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const parent = sitemap.find((item) => item.id === parentId);

  const menuItems = parent?.items?.map((item) => {
    const id = [parentId, item.id].join('/');

    return {
      ...item,
      as: 'button',
      onClick: () => setPageId(id),
    };
  });

  return (
    <PageBase spacing={6} margin="page">
      <Section spacing={4}>
        <Heading size="lg">Alle skjema</Heading>
        <CategoryGrid items={menuItems} />
      </Section>
      <Section spacing={4}>
        <Heading size="lg">Akkurat nå er dette mye brukt</Heading>
        <ListBase spacing={3}>
          {services.map((item) => (
            <ListItem key={item.id} {...item} size="md" theme="subtle" />
          ))}
        </ListBase>
      </Section>
    </PageBase>
  );
};
