'use client';
import { Fragment, useState } from 'react';
import { Divider, Flex, List, Section, SeenByLogButton, UsedByLogItem, type UsedByLogItemProps } from '..';

export interface UsedByLogProps {
  title?: string;
  collapsible?: boolean;
  expanded?: boolean;
  items: UsedByLogItemProps[];
  size?: 'sm' | 'md';
  endUserLabel?: string;
}

/**
 * SeenByLog
 */

export const UsedByLog = ({
  collapsible = true,
  expanded,
  title,
  items,
  size = 'sm',
  endUserLabel,
}: UsedByLogProps) => {
  const [open, setOpen] = useState<boolean>(expanded || (!collapsible && true));

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  if (items?.length === 1) {
    return (
      <Section spacing={1}>
        <List size={size} spacing={1}>
          {items?.map((item) => {
            return <UsedByLogItem {...item} key={item.id} size={size} endUserLabel={endUserLabel} />;
          })}
        </List>
      </Section>
    );
  }

  return (
    <Section spacing={1}>
      {title && (
        <Flex>
          {collapsible ? (
            <SeenByLogButton icon={{ items }} as="button" onClick={onToggle}>
              {title}
            </SeenByLogButton>
          ) : (
            <SeenByLogButton icon={{ items }} as="div">
              {title}
            </SeenByLogButton>
          )}
        </Flex>
      )}
      {title && open && <Divider />}
      {open && (
        <List size={size} spacing={1}>
          {items?.map((item, index) => {
            return (
              <Fragment key={item.id}>
                {index > 0 && <Divider />}
                <UsedByLogItem {...item} size={size} endUserLabel={endUserLabel} />
              </Fragment>
            );
          })}
        </List>
      )}
    </Section>
  );
};
