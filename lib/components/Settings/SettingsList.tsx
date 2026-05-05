import { Fragment, type ReactNode } from 'react';
import { Heading, SettingsItem, type SettingsItemProps } from '..';
import { useMenu } from '../../hooks';
import styles from './settlingsList.module.css';

export interface SettingsGroupProps {
  title?: string | ReactNode;
}

export interface SettingsListProps {
  variant?: 'default' | 'menu';
  items: SettingsItemProps[];
  groups?: Record<string, SettingsGroupProps>;
  sortGroupBy?: (a: [string, SettingsItemProps[]], b: [string, SettingsItemProps[]]) => number;
}

export const SettingsList = ({ items, variant = 'default', groups = {}, sortGroupBy }: SettingsListProps) => {
  const { menu } = useMenu<SettingsItemProps, SettingsGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  if (variant === 'menu') {
    return (
      <div className={styles.section} data-variant={variant}>
        {menu?.map((group, groupIndex) => {
          const groupProps = group.props || {};
          return (
            <Fragment key={groupIndex}>
              {groupProps?.title && (
                <Heading size="xs" weight="normal" variant="subtle">
                  {groupProps.title as string}
                </Heading>
              )}
              <ul className={styles.list}>
                {group?.items.map((item, index) => {
                  const itemProps = item.props || {};

                  return <SettingsItem {...itemProps} key={'settings-list-item' + index} />;
                })}
              </ul>
            </Fragment>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.section} data-variant={variant}>
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <Fragment key={groupIndex}>
            {groupProps?.title && <Heading size="lg">{groupProps.title as string}</Heading>}
            <section className={styles.group}>
              <ul className={styles.list}>
                {group?.items.map((item, index) => {
                  const itemProps = item.props || {};

                  return <SettingsItem {...itemProps} key={'settings-list-item' + index} />;
                })}
              </ul>
            </section>
          </Fragment>
        );
      })}
    </div>
  );
};
