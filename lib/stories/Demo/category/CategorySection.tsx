import {
  AccessPackageListItemProps,
  Article,
  ListBase,
  PageBase,
  PageHeader,
  PageNav,
  Typography
} from '../../../components';
import { useNavigation, AccessPackageItem } from '../';
export const CategorySection = () => {
  const {parentId, sectionId, section, breadcrumbs, setPageId} = useNavigation();
  const sectionIcon = section?.icon;
  const sectionTitle = section?.title;

  const list: AccessPackageListItemProps[] = (section?.items || []).map((item) => {
    const { id, title, icon } = item;
    const itemId = [parentId, sectionId, id].join('/');

    return {
      id: itemId,
      variant: "category",
      as: 'button',
      onClick: () => setPageId(itemId),
      icon,
      title,
      linkIcon: null,
      badge: {label: '5 tjenester'},
      menu: {
        id: ['menu', id].join('-'),
        items: [{ title: 'Lorem' }, { title: 'Ipsum' }, { title: 'Dolor' }],
      },
    };
  });

  return (
    <PageBase color="company" spacing={4}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Article spacing={4}>
        <PageHeader icon={{theme: "surface", svgElement: sectionIcon}} title={sectionTitle} />
        <Typography>
          <p>
            Når du betaler ut lønn til ansatte, er det flere rapporteringsplikter du må oppfylle overfor offentlige
            myndigheter i Norge. De viktigste rapporteringspliktene inkluderer:
          </p>
        </Typography>

        <ListBase color="neutral">
          {list.map((item) => (
            <AccessPackageItem key={item.id} {...item} theme="subtle" />
          ))}
        </ListBase>
      </Article>
    </PageBase>
  );
};
