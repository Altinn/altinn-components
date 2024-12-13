import {
  type AvatarGroupProps,
  type AvatarProps,
  Heading,
  type IconName,
  ListItemMedia,
  Section,
  type SectionProps,
} from '..';

export interface PageHeaderProps extends SectionProps {
  title?: string;
  description?: string;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
}

export const PageHeader = ({ title, icon, avatar, avatarGroup, children, ...rest }: PageHeaderProps) => {
  return (
    <Section as="header" spacing="md" {...rest}>
      <Section flex="row" align="center" spacing="md">
        <ListItemMedia avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="lg" />
        <Heading size="lg">{title}</Heading>
      </Section>
      {children}
    </Section>
  );
};
