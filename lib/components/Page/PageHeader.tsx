import { Heading } from '../';
import { PageHeaderMedia, type PageHeaderMediaProps } from './PageHeaderMedia';
import { PageNav } from './PageNav';
import { SectionBase, type SectionBaseProps } from './SectionBase';
import styles from './pageHeader.module.css';

export interface PageHeaderProps extends SectionBaseProps, PageHeaderMediaProps {
  title?: string;
  description?: string;
}

export const PageHeader = ({ title, description, icon, avatar, avatarGroup, children, ...props }: PageHeaderProps) => {
  return (
    <SectionBase as="header" {...props}>
      <PageNav />
      <section className={styles.header}>
        <PageHeaderMedia icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
        <div className={styles.title}>
          <Heading size="md">{title}</Heading>
          <div className="description">{description}</div>
        </div>
      </section>
    </SectionBase>
  );
};
