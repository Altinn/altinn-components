import {
  type AvatarGroupProps,
  type AvatarProps,
  Flex,
  Heading,
  type IconName,
  type IconProps,
  ListItemIcon,
  PageTabs,
  type PageTabsProps,
  Section,
  type SectionProps,
  Typography,
} from '..';

export type PageHeaderVariant = 'card' | undefined;
export type PageHeaderSize = 'lg' | 'xl';

export interface PageHeaderProps extends SectionProps {
  variant?: PageHeaderVariant;
  size?: PageHeaderSize;
  title?: string;
  description?: string;
  icon?: IconName | IconProps;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  tabs?: PageTabsProps;
}

export const PageHeader = ({
  variant,
  size = 'xl',
  title,
  description,
  icon,
  avatar,
  avatarGroup,
  tabs,
  theme,
  padding,
  shadow,
  bleed,
  children,
  ...rest
}: PageHeaderProps) => {
  /** If variant = card, set theme, padding and shadow and bleed.  */

  if (variant === 'card') {
    theme = 'default';
    padding = 'page';
    shadow = 'xs';
    bleed = true;
  }

  return (
    <Section as="header" theme={theme} shadow={shadow} bleed={bleed} {...rest}>
      <Flex direction="row" align="center" padding={padding} spacing={3}>
        <ListItemIcon avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="xl" />
        <Flex direction="col">
          <Heading size={size}>{title}</Heading>
          {description && <Typography size="xs">{description}</Typography>}
        </Flex>
      </Flex>
      {children}
      {tabs && <PageTabs {...tabs} variant={variant} />}
    </Section>
  );
};
