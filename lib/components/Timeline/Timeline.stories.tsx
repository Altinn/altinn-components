import type { Meta } from '@storybook/react';
import {
  Timeline,
  TimelineActivity,
  TimelineHeader,
  TimelineFooter,
  TimelineSection,
  TransmissionList,
  Byline,
  Typography,
  AttachmentList,
  Button,
} from '..';
import { skatt } from '../../../examples/avatar';

import { DiamondFillIcon } from '@navikt/aksel-icons';

const meta = {
  title: 'Timeline/Timeline',
  component: Timeline,
  tags: ['beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Timeline>;

export default meta;

export const ActivityLog = () => {
  return (
    <Timeline>
      <TimelineActivity dateline="Today, 14:10">
        <Typography>
          <p>End of conversation.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="Yesterday">
        <Typography>
          <p>Activity 4.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="A week ago">
        <Typography>
          <p>Activity 3.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="2 weeks ago">
        <Typography>
          <p>Activity 2.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="Last year">
        <Typography>
          <p>Start of conversation.</p>
        </Typography>
      </TimelineActivity>
    </Timeline>
  );
};

export const UsingAvatars = () => {
  return (
    <Timeline>
      <TimelineActivity
        avatar={skatt}
        color="company"
        dateline={
          <>
            <strong>Skattetaten,</strong> today
          </>
        }
      >
        <Typography>
          <p>End of conversation.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="Yesterday">
        <Typography>
          <p>Some description.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="A week ago">
        <Typography>
          <p>Some description.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity dateline="2 weeks ago">
        <Typography>
          <p>Some description.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        dateline={
          <>
            <strong>Kari Nordmann,</strong> last year
          </>
        }
      >
        <Typography>
          <p>Start of conversation.</p>
        </Typography>
      </TimelineActivity>
    </Timeline>
  );
};

export const CollapsingElements = () => {
  return (
    <Timeline>
      <TimelineActivity
        avatar={skatt}
        color="company"
        dateline={
          <>
            <strong>Skattetaten,</strong> today
          </>
        }
      >
        <Typography>
          <p>End of conversation.</p>
        </Typography>
      </TimelineActivity>
      <TimelineActivity icon={DiamondFillIcon} border="dashed" margin="page" dateline="2 weeks ago – last year">
        <Typography>
          <Button variant="outline">Show all</Button>
        </Typography>
      </TimelineActivity>
      <TimelineActivity
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        dateline={
          <>
            <strong>Kari Nordmann,</strong> last year
          </>
        }
      >
        <Typography>
          <p>Start of conversation.</p>
        </Typography>
      </TimelineActivity>
    </Timeline>
  );
};

export const DialogHistory = () => {
  return (
    <Timeline>
      <TimelineHeader avatar={{ ...skatt, size: 'lg' }}>
        <Byline size="lg">
          <strong>Skattetaten</strong> til Kari Nordmann
        </Byline>
      </TimelineHeader>
      <TimelineSection margin="section">
        <Byline>26. februar, kl. 08.00</Byline>
        <Typography>
          <p>Gratulerer, søknaden din om startsborgerskap er godkjent.</p>
          <AttachmentList items={[{ href: '/#1', label: 'Godkjent vedtak.pdf' }]} />
        </Typography>
      </TimelineSection>
      <TimelineActivity>
        <TransmissionList
          items={[
            {
              id: '2',
              dateline: 'I går, kl 08.00',
              sender: skatt,
              createdAtLabel: '25. februar kl 08.00',
              title: 'Søknaden din er godkjent',
              summary: 'Søknad om statsborgerskap er godkjent.',
              attachments: { items: [{ href: '/#1', label: 'Godkjent vedtak.pdf' }] },
              badge: {
                theme: 'base',
                color: 'success',
                label: 'Godkjent',
              },
            },
            {
              id: '1',
              dateline: '2 uker siden',
              sender: { name: 'Kari Nordmann' },
              createdAtLabel: '11. februar kl 12.25',
              title: 'Søknad om startsborgerskap',
              attachments: { items: [{ href: '/#1', label: 'Kvittering.pdf' }] },
            },
          ]}
        />
      </TimelineActivity>
      <TimelineFooter>
        <Byline>Søknaden ble opprettet</Byline>
      </TimelineFooter>
    </Timeline>
  );
};
