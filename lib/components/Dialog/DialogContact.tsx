import { QuestionmarkCircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Button, ButtonGroup, type ButtonProps, Heading, Link, type LinkProps, Typography } from '..';

import styles from './dialogContact.module.css';

export interface DialogContactButtonProps {
  as?: ButtonProps['as'];
  href?: ButtonProps['href'];
  onClick?: ButtonProps['onClick'];
  label: string;
}

export interface DialogContactProps {
  id?: string;
  title?: string;
  children?: ReactNode;
  buttons: DialogContactButtonProps[];
  helpLink?: LinkProps;
}

export const DialogContact = ({
  id = 'dialog-contact',
  title,
  children,
  buttons = [],
  helpLink,
}: DialogContactProps) => {
  return (
    <section className={styles.section} id={id}>
      {title && <Heading size="lg">{title}</Heading>}
      <Typography size="sm">{children}</Typography>
      {buttons && (
        <ButtonGroup wrap>
          {buttons.map((item, index) => {
            const { as, href, onClick, label } = item;
            return (
              <Button
                as={as}
                href={href}
                onClick={onClick}
                variant="outline"
                key={index}
                className={styles.contactButton}
              >
                {label}
              </Button>
            );
          })}
        </ButtonGroup>
      )}
      {helpLink && (
        <Typography size="sm">
          <Link as={helpLink.as} href={helpLink.href} onClick={helpLink.onClick}>
            <QuestionmarkCircleFillIcon className={styles.helpIcon} />
            {helpLink.children}
          </Link>
        </Typography>
      )}
    </section>
  );
};
