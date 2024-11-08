'use client';
import { Fragment } from 'react';
import { ListBase, DialogListItem, Dialog, Toolbar, ActionMenu } from '../../components';
import styles from './inboxSection.module.css';
import { groupBy } from './groupBy';
import { useInboxContext } from './';

export function InboxSection() {
  const { inboxId, dialog, dialogId, onDialogId, items, onSelectId, selectedCount, bulkMenu, toolbar } =
    useInboxContext();

  if (dialog) {
    return (
      <section>
        <Dialog {...dialog} />
        <ActionMenu items={bulkMenu} theme="light" />
      </section>
    );
  }

  const count = items?.length;
  //  const inbox = inboxes[inboxId] || inboxes['search'];

  if (!count) {
    return (
      <section className={styles?.section}>
        <header className={styles?.header}>
          <h2 className={styles?.title}>{inbox?.title?.replace('{count}', 'Ingen')}</h2>
        </header>
      </section>
    );
  }

  const sortedItems = items;

  const inboxItems = sortedItems?.map((item) => {
    return {
      ...item,
      group: item?.updatedAt.substr(0, 7),
    };
  });

  // default group by date

  const groups = groupBy(inboxItems);

  return (
    <main>
      {!selectedCount > 0 && <Toolbar {...toolbar} />}
      <section className={styles?.section}>
        {Object.entries(groups).map(([key, items]) => {
          const title = key;
          return (
            <Fragment key={key}>
              <header className={styles?.header}>
                <h2 className={styles?.title}>{title.substring(0, 1).toUpperCase() + title.substring(1)}</h2>
              </header>
              <ListBase>
                {items?.map((item) => {
                  return (
                    <DialogListItem
                      {...item}
                      key={item?.id}
                      title={item?.title}
                      onClick={selectedCount > 0 ? () => onSelectId(item.id) : () => onDialogId(item.id)}
                      selected={item?.selected}
                      select={{ checked: item?.selected, onChange: () => onSelectId(item.id) }}
                    />
                  );
                })}
              </ListBase>
            </Fragment>
          );
        })}
      </section>
    </main>
  );
}
