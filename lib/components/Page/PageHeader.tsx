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
    <Section as="header" spacing="md" {...rest}>
      <Flex direction="row" align="center" spacing="md">
        <ListItemMedia avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="lg" />
        <Heading size="xl">{title}</Heading>
      </Flex>
      {children}
    </Section>
  );
};
