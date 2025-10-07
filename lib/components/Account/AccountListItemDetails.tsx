import { Fragment, type ReactNode } from 'react';

import {
  AccountOrganization,
  type AccountOrganizationProps,
  Button,
  ButtonGroup,
  type ButtonProps,
  Divider,
  List,
  Section,
  type SectionProps,
  SettingsItem,
  type SettingsItemProps,
} from '..';

export interface AccountListItemDetailsProps {
  color?: SectionProps['color'];
  loading?: boolean;
  loadingText?: string;
  buttons?: ButtonProps[];
  settings?: SettingsItemProps[];
  organization?: AccountOrganizationProps['items'];
  children?: ReactNode;
}

export const AccountListItemDetails = ({
  color,
  loading,
  loadingText = 'Loading...',
  buttons,
  settings,
  organization,
  children,
}: AccountListItemDetailsProps) => {
  if (loading) {
    return (
      <Section padding={6} spacing={4}>
        <Button variant="outline" loading>
          {loadingText}
        </Button>
      </Section>
    );
  }

  return (
    <Section padding={6} spacing={4} color={color}>
      {buttons && (
        <ButtonGroup size="sm">
          {buttons.map((button, index) => {
            const { label, variant, ...buttonProps } = button;
            return (
              <Button {...buttonProps} variant={variant || 'outline'} key={index}>
                {label}
              </Button>
            );
          })}
        </ButtonGroup>
      )}

      {settings && (
        <List size="sm">
          {settings.map((item, index) => {
            return (
              <Fragment key={index}>
                {index > 0 && <Divider as="li" />}
                <SettingsItem {...item} />
              </Fragment>
            );
          })}
        </List>
      )}
      {organization && <AccountOrganization items={organization} />}
      {children}
    </Section>
  );
};
