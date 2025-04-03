import { ArrowForwardFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { ListBase } from '../List';
import { Flex } from '../Page';
import { TimelineActivity, TimelineLink, type TimelineLinkProps } from '../Timeline';
import { Transmission, type TransmissionProps } from '../Transmission';
import { Typography } from '../Typography';

export interface DialogHistoryItemProps extends Omit<TransmissionProps, 'variant'> {
  variant?: 'transmission' | 'activity';
  byline?: string;
  datetime?: string;
  children?: ReactNode;
  items?: DialogHistoryItemProps[];
  link?: TimelineLinkProps;
}
export const DialogHistoryItem = ({ variant, byline, datetime, children, link, ...props }: DialogHistoryItemProps) => {
  switch (variant) {
    case 'transmission':
      return (
        <TimelineActivity byline={byline} datetime={datetime} spacing={2}>
          <ListBase>
            <Transmission {...props}>{children}</Transmission>
          </ListBase>
          {link && <TimelineLink {...link} icon={link?.icon || ArrowForwardFillIcon} />}
        </TimelineActivity>
      );
    default:
      return (
        <TimelineActivity byline={byline} datetime={datetime}>
          <Flex spacing={2} align="center">
            {props.sender && <Avatar {...props.sender} />}
            <Typography>{children}</Typography>
          </Flex>
        </TimelineActivity>
      );
  }
};
