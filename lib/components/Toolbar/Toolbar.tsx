import { useState, useEffect } from 'react';
import { ToolbarBase } from './ToolbarBase';
import { ToolbarItem, ToolbarItemProps } from './ToolbarItem';
import { ToolbarAdd } from './ToolbarAdd';
import { getQueryParams } from './query';

export interface ToolbarProps {
  items?: ToolbarItemProps[];
}

export const Toolbar = ({ items, onQuery }: ToolbarProps) => {
  const [byId, setById] = useState({});

  useEffect(() => {
    items?.map((item, index) => {
      const id = item?.name || ['filter', index].join('-');

      setById((prevState) => {
        return {
          ...prevState,
          [id]: { ...item, id, order: index + 1, expanded: item?.expanded },
        };
      });
    });
  }, [items]);

  useEffect(() => {
    let query = {};

    Object.values(byId)
      ?.filter((item) => item.name && item.value)
      ?.map((item) => {
        const { id, value } = item;
        query[id] = value;
      });

    onQuery && onQuery({ query, params: getQueryParams(query) });
  }, [byId]);

  const onAddFilter = (event) => {
    const type = event?.target?.type;
    const name = event?.target?.name;
    const value = event?.target?.value;

    setById((prevState) => {
      const prevValue = prevState[name]?.value || [];
      const nextValue = type === 'checkbox' ? [...prevValue, value] : value;
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          value: nextValue,
        },
      };
    });
  };

  const onRemoveFilter = (event) => {
    const type = event?.target?.type;
    const name = event?.target?.name;
    const value = event?.target?.value;
    setById((prevState) => {
      const prevValue = prevState[name]?.value || [];
      const nextValue = type === 'checkbox' ? prevValue?.filter((v) => v !== value) : null;
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          value: nextValue,
        },
      };
    });
  };

  const onChange = (event) => {
    if (event?.target?.checked) {
      onAddFilter(event);
    } else {
      onRemoveFilter(event);
    }
  };

  const onAdd = ({ id }) => {
    setById((prevState) => {
      const keys = Object.values(prevState)?.filter((item) => item.expanded);
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          removable: true,
          expanded: true,
          order: keys?.length + 1,
        },
      };
    });
  };

  const onRemove = ({ id }) => {
    setById((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          expanded: false,
          value: null,
          order: null,
        },
      };
    });
  };

  const expandedItems = Object.values(byId)?.filter((item) => item.expanded);

  const collapsedItems = Object.values(byId)
    ?.filter((item) => !item.expanded)
    ?.map((item) => {
      return {
        ...item,
        onChange: onChange,
        onClick: () => onAdd(item),
        onRemove: () => onRemove(item),
      };
    });

  return (
    <ToolbarBase>
      {expandedItems?.map((item, index) => {
        return <ToolbarItem {...item} onChange={onChange} />;
      })}
      {collapsedItems?.length ? <ToolbarAdd items={collapsedItems} /> : ''}
    </ToolbarBase>
  );
};
