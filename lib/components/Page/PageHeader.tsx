import { Heading } from '../';
import { PageHeaderMedia, type PageHeaderMediaProps } from './PageHeaderMedia';
import { SectionBase, type SectionBaseProps } from './SectionBase';
import styles from './pageHeader.module.css';

export interface PageHeaderProps extends SectionBaseProps, PageHeaderMediaProps {
  title?: string;
}

export const PageHeader = ({ title, icon, avatar, avatarGroup, children, ...props }: PageHeaderProps) => {
  return (
    <SectionBase as="header" {...props}>
      <div className={styles.title}>
        <PageHeaderMedia icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
        <Heading size="md">{title}</Heading>
      </div>

      {children}
    </SectionBase>
  );
};
