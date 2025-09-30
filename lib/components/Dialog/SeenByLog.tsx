'use client';
import { Fragment, useState } from 'react';
import { Divider, Flex, List, Section, SeenByLogButton, SeenByLogItem, type SeenByLogItemProps } from '..';

export interface SeenByLogProps {
  title?: string;
  collapsible?: boolean;
  expanded?: boolean;
  items: SeenByLogItemProps[];
  size?: 'sm' | 'md';
  endUserLabel?: string;
}

/**
 * SeenByLog
 */

export const SeenByLog = ({
  collapsible,
  expanded,
  title,
  items,
  size = 'sm',
  endUserLabel = 'You',
}: SeenByLogProps) => {
  const [open, setOpen] = useState<boolean>(expanded || (!collapsible && true));

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

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
                <SeenByLogItem {...item} key={item.id} size={size} endUserLabel={endUserLabel} />
              </Fragment>
            );
          })}
        </List>
      )}
    </Section>
  );
};
