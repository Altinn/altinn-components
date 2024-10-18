import { useState, useEffect } from "react";
import { ToolbarBase } from "./ToolbarBase";
import { ToolbarItem, ToolbarItemProps } from "./ToolbarItem";
import { ToolbarAdd } from "./ToolbarAdd";
import { getQueryParams } from "./query";

export interface ToolbarProps {
  items?: ToolbarItemProps[];
}

export const Toolbar = ({ items, onQuery }: ToolbarProps) => {
  const [openId, setOpenId] = useState(null);
  const [byId, setById] = useState({});

  useEffect(() => {
    items?.map((item, index) => {
      const id = item?.name || ["toolbar", index].join("-");

      setById((prevState) => {
        return {
          ...prevState,
          [id]: {
            ...item,
            id,
            hidden: item.hidden ? true : false,
            order: index + 1,
          },
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
      const nextValue = type === "checkbox" ? [...prevValue, value] : value;
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
      const nextValue =
        type === "checkbox" ? prevValue?.filter((v) => v !== value) : null;
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

  const onToggle = ({ id }) => {
    setOpenId((prevState) => {
      if (prevState === id) {
        return null;
      }
      return id;
    });
  };

  const onAdd = ({ id }) => {
    setById((prevState) => {
      const keys = Object.values(prevState)?.filter((item) => item.expanded);
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          hidden: false,
          removable: true,
          order: keys?.length + 1,
        },
      };
    });
    setOpenId(id);
  };

  const onRemove = ({ id }) => {
    setById((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          hidden: true,
          value: null,
          order: null,
        },
      };
    });
  };

  const visibleItems = Object.values(byId)?.filter((item) => !item.hidden);

  const hiddenItems = Object.values(byId)
    ?.filter((item) => item.hidden)
    ?.map((item) => {
      return {
        ...item,
        onClick: () => onAdd(item),
      };
    });

  return (
    <ToolbarBase>
      {visibleItems?.map((item, index) => {
        return (
          <ToolbarItem
            key={item.id}
            expanded={item?.id === openId}
            onToggle={() => onToggle(item)}
            onRemove={() => onRemove(item)}
            onChange={onChange}
            {...item}
          />
        );
      })}
      {hiddenItems?.length ? (
        <ToolbarAdd
          expanded={openId === "add"}
          onToggle={() => onToggle({ id: "add" })}
          items={hiddenItems}
        />
      ) : (
        ""
      )}
    </ToolbarBase>
  );
};
