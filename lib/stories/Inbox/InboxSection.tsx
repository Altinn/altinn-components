'use client';
import { Fragment } from 'react';
import { ListBase, DialogListItem, Dialog, Toolbar, ActionMenu } from '../../components';
import styles from './inboxSection.module.css';
import { groupBy } from './groupBy';
import { useInboxContext } from './';

const inboxes = {
  search: {
    empty: 'Ingen treff',
  },
  drafts: {
    title: '{count} utkast',
  },
  sent: {
    title: '{count} sendt',
  },
  trash: {
    title: '{count} dialoger i papirkurven',
  },
  archive: {
    title: '{count} arkiverte dialoger',
  },
};

export function InboxSection() {
  const { inboxId, dialogId, onDialogId, items, onSelectId, selectedCount, bulkMenu, toolbar } = useInboxContext();

  if (dialogId) {
    const dialog = items?.find((item) => item.id === dialogId);

    const backButton = {
      onClick: () => onDialogId(dialogId),
    };

    return (
      <section>
        <Dialog {...dialog} backButton={backButton} />
        <ActionMenu items={bulkMenu} theme="light" />
      </section>
    );
  }

  const count = items?.length;
  const inbox = inboxes[inboxId] || inboxes['search'];

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
      <Toolbar {...toolbar} />
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
