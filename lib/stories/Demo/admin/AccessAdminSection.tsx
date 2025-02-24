import { Section, Toolbar, ListBase, Heading} from '../../../components';
import { AccessAreaItem, type AccessAreaItemProps, AccessPackageItem } from './';

export interface AccessAdminSectionProps {
  title?: string;
  description?: string;
  items: AccessAreaItemProps[];
  expandedId?: string;
  onToggle?: (id: string) => void;
  loading?: boolean;
}


export const AccessAdminSection = ({items}: AccessAdminSectionProps) => {

  const filters = [
    {
      removable: false,
      name: "groupId",
      label: "Alle grupper",
      optionType: "checkbox",
      options: [
        {
          value: "Mest brukte",
          label: "Mest brukte"
        },
        {
          value: "Bransjespesifikke",
          label: "Bransjespesifikke"
        }
      ]
    }
  ]


  const title = items.length + ' tilgangspakker';

  return (
    <Section spacing={6}>
      <Toolbar search={{ placeholder: 'Søk etter fullmakt', name: 'search' }} filters={filters} />
      <Heading size="lg">{title}</Heading>
      {items.length > 0 && (
        <ListBase>
          {items.map((item) => (
            <AccessAreaItem {...item} key={item.id}>
                <ListBase>
                  {item?.items?.map(child => <AccessPackageItem {...child} key={child.id} />)}
                </ListBase>
              </AccessAreaItem>
          ))}
        </ListBase>
      )}

    </Section>
  );
};
