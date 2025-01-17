import { useState, useMemo } from "react"
import { Section, Toolbar, ListBase, Button, Heading } from '../../../components';
import { UserAdminListItem, type UserAdminListProps } from '..';

export interface UserAdminListProps {
  items: UserAdminListProps[]
}

export const UserAdminSection = ({items = []}) => {

  let typeOptions = {}

  items?.map(item => {
    if (!typeOptions[item?.type]) {
      typeOptions[item?.type] = {
        label: item?.type,
        value: item?.type,
        count: 0,
      };
    }
    if (typeOptions[item?.type]) {
      typeOptions[item!.type].count++;
    }
  })
  
  const filters = [
    {
      removable: false,
      name: "groupId",
      label: "Alle brukere",
      optionType: "checkbox",
      options: Object.values(typeOptions)?.map(item => {
        return {
          ...item,
          badge: {
            label: item?.count.toString()
          }
        }
      })
    }
  ]

    const [filterState, setFilterState] = useState<FilterState>({});
    const [q, setQ] = useState<FilterState>("");
   
    const filteredItems = useMemo(() => {
      return items?.filter(item => {

        const find = [item.name, item?.role].join(" ").toLowerCase()
  
        if (q && !find.includes(q)) {
          return false
        }
  
        if (filterState.groupId?.length && !filterState.groupId.includes(item.type)) {
          return false
        }
  
        return true
  
      }) || []      
    }, [q, filterState]);


    
  const title = filteredItems?.length + ' brukere';
  

  return (
    <Section color="company" spacing={6}>
      <Toolbar search={{ placeholder: 'Søk etter bruker', name: 'search', onChange: (e) => setQ(e.target.value) }} filters={filters} filterState={filterState} onFilterStateChange={setFilterState}>
      <Button icon="plus" size="sm" variant="outline">Ny bruker</Button>
        </Toolbar>
        <Heading size="lg">{title}</Heading>

      <ListBase>
        {filteredItems.map((item, index) => {
          return (
            <UserAdminListItem
              key={item.id}
              {...item}
            />
          );
        })}
      </ListBase>
      </Section>
  );
};
