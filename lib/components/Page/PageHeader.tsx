import {
  type AvatarGroupProps,
  type AvatarProps,
  Flex,
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
    <Section as="header" spacing={3} {...rest}>
      <Flex direction="row" align="center" spacing={3}>
        <ListItemMedia avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="xl" />
        <Heading size="xl">{title}</Heading>
      </Flex>
      {children}
    </Section>
  );
};
