import {
  AuthEvidenceItem,
  type AuthEvidenceItemProps,
  type AuthEvidenceOwnerProps,
  AuthEvidenceParent,
  type AuthEvidenceServiceProps,
} from '.';

import { Fragment } from 'react';
import { useMenu } from '../../hooks';
import { Heading } from '../Typography';
import styles from './AuthEvidence.module.css';

export interface AuthEvidenceGroupProps {
  title?: string;
}

export interface AuthEvidenceListProps {
  owner?: AuthEvidenceOwnerProps;
  service?: AuthEvidenceServiceProps;
  items?: AuthEvidenceItemProps[];
  groups?: Record<string, AuthEvidenceGroupProps>;
}

export const AuthEvidence = ({ owner, service, items = [], groups = {} }: AuthEvidenceListProps) => {
  const { menu } = useMenu<AuthEvidenceItemProps, AuthEvidenceGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
  });

  return (
    <div>
      {owner && <AuthEvidenceParent owner={owner} service={service} />}
      <section className={styles.evidence}>
        {menu?.map((group, groupIndex) => {
          const groupProps = group.props || {};
          return (
            <Fragment key={groupIndex}>
              {groupProps.title && <Heading className={styles.title}>{groupProps?.title as string}</Heading>}
              <ul className={styles.list}>
                {group?.items?.map((item) => {
                  const itemProps = item.props || {};

                  return (
                    <li key={itemProps.id}>
                      <AuthEvidenceItem {...itemProps} />
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};
