import type { ReactNode } from 'react';

import {
  type AvatarGroupProps,
  type AvatarProps,
  type BackButtonProps,
  type BreadcrumbsLinkProps,
  Flex,
  Heading,
  type IconProps,
  ListItemIcon,
  PageNav,
  PageTabs,
  type PageTabsProps,
  Section,
  type SectionProps,
  type SvgElement,
  Typography,
} from '..';

export type PageHeaderVariant = 'card' | undefined;
export type PageHeaderSize = 'lg' | 'xl';

export interface PageHeaderProps extends SectionProps {
  variant?: PageHeaderVariant;
  size?: PageHeaderSize;
  title?: string;
  description?: string;
  icon?: SvgElement | IconProps;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  tabs?: PageTabsProps;
  backButton?: BackButtonProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  controls?: ReactNode;
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
  breadcrumbs,
  backButton,
  controls,
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

  if (variant === 'card') {
    return (
      <Section as="header" theme={theme} shadow={shadow} bleed={bleed} {...rest}>
        {(backButton || breadcrumbs) && <PageNav backButton={backButton} breadcrumbs={breadcrumbs} padding={2} />}
        <Flex direction="row" align="center" padding="page" spacing={3}>
          <ListItemIcon avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="xl" />
          <Flex direction="col">
            <Heading size={size}>{title}</Heading>
            {description && <Typography size="xs">{description}</Typography>}
          </Flex>
        </Flex>
        {children}
        {tabs && <PageTabs {...tabs} padding={2} />}
      </Section>
    );
  }

  return (
    <Section as="header" theme={theme} shadow={shadow} bleed={bleed} {...rest}>
      {(backButton || breadcrumbs) && <PageNav backButton={backButton} breadcrumbs={breadcrumbs} />}
      <Flex direction="row" align="center" padding={padding} spacing={3}>
        <ListItemIcon avatar={avatar} avatarGroup={avatarGroup} icon={icon} size="xl" />
        <Flex direction="col">
          <Heading size={size}>{title}</Heading>
          {description && <Typography size="xs">{description}</Typography>}
        </Flex>
      </Flex>
      {children}
      {tabs && <PageTabs {...tabs} />}
    </Section>
  );
};
