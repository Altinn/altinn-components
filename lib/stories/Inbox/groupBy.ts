interface GroupableItem {
  group: string;
}

export const groupBy = (items: GroupableItem[]) => {
  const groups: Record<string, GroupableItem[]> = items?.reduce(
    (acc: Record<string, GroupableItem[]>, item) => {
      const group = item?.group || '';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, GroupableItem[]>,
  );

  return groups;
};
