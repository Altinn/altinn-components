import React from 'react';
import { PageBase, Toolbar, DialogList } from '../../components';
import { useAppContext, InboxToolbar } from './';
import { dialogList } from './data';
export const InboxSection = () => {
  const { accountMenu, pageId, setPageId, currentAccount } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1] || "inbox";

  const recipient = currentAccount && { type: currentAccount.type, name: currentAccount.name } || { type: "person", name: "Unknown"}

  let groups = {}

  const items = dialogList?.filter(item => {

    const { status, groupId } = item

    groups[groupId] = {
      title: groupId
    }

    if (sectionId === "inbox" && status?.value) {
      if (['new', 'in-progress', 'completed', 'requires-attention'].includes(status.value)) {
        return true
      } else {
        return false
      }
    } else if (sectionId === "drafts" && status?.value === "draft") {
        return true
    } else if (sectionId === "sent" && status?.value === "sent") {
      return true
    } else {
      return false
    }

    
  }).map((item) => {
    const dialogId = [parentId, sectionId, item.id].join('/');

    return {
      ...item,
      recipient,
      onClick: () => setPageId?.(dialogId),
    };
  }) || [];

  

  return (
    <PageBase spacing="md" margin="lg">
      <InboxToolbar />
      <DialogList groups={groups} items={items} />
    </PageBase>
  );
};
