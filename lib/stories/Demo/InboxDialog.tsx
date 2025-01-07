import React from 'react';
import { PageBase, Dialog, ActionMenu } from '../../components';
import { useAppContext } from './';
import { dialogs, dialogMenuItems } from './data';
export const InboxDialog = () => {
  const { pageId, setPageId, currentAccount } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1];
  const dialogId = parents?.[2];

  const dialog = dialogs?.find((item) => item.id === dialogId);

  const backId = [parentId, sectionId].join('/');

  const backButton = {
    label: 'Tilbake',
    onClick: () => setPageId?.(backId),
  };
  
  const recipient = currentAccount && { type: currentAccount.type, name: currentAccount.name } || { type: "person", name: "Unknown"}

  return (
    <PageBase inset>
      <Dialog {...dialog} recipient={recipient} backButton={backButton} menu={{ id:"dialog-menu", items: dialogMenuItems }} />
      <ActionMenu items={dialogMenuItems} />
    </PageBase>
  );
};
