import React from 'react';
import { PageBase, Toolbar, DialogList } from '../../components';
import { useAppContext } from './';
import { dialogs } from './data';
export const InboxSection = () => {
  const { accountMenu, pageId, setPageId } = useAppContext();

  const items = dialogs?.map((item) => {
    const dialogId = [pageId, item.id].join('/');

    return {
      ...item,
      as: 'button',
      onClick: () => setPageId(dialogId),
    };
  });

  return (
    <PageBase spacing="md" margin="lg">
      <Toolbar accountMenu={accountMenu} />
      <DialogList items={items} />
    </PageBase>
  );
};
