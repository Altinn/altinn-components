import { DiamondFillIcon, TeddyBearFillIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import {
  AttachmentList,
  Button,
  Byline,
  Timeline,
  TimelineActivity,
  TimelineFooter,
  TimelineHeader,
  TimelineSection,
  TimelineSegment,
  TransmissionList,
} from '..';
import { skatt } from '../../../examples/avatar';

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
      <TimelineSegment>
        <TimelineActivity byline="Today, 14:10">End of conversation.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Yesterday, 20:00">Activity 4.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Yesterday, 12:00">Activity 3.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Yesterday, 08:00">Activity 2.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Last week">Start of conversation.</TimelineActivity>
      </TimelineSegment>
    </Timeline>
  );
};

export const GroupedLog = () => {
  return (
    <Timeline>
      <TimelineSegment>
        <TimelineActivity byline="Today, 14:10">End of conversation.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment byline="Yesterday">
        <TimelineActivity byline="20:00">Activity 4.</TimelineActivity>
        <TimelineActivity byline="12:00">Activity 3.</TimelineActivity>
        <TimelineActivity byline="08:00">Activity 2.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Last week">Start of conversation.</TimelineActivity>
      </TimelineSegment>
    </Timeline>
  );
};

export const UsingAvatars = () => {
  return (
    <Timeline>
      <TimelineSegment avatar={skatt} color="company">
        <TimelineActivity
          byline={
            <>
              <strong>Skatteetaten,</strong> today
            </>
          }
        >
          End of conversation.
        </TimelineActivity>
      </TimelineSegment>
      <TimelineSegment byline="Yesterday">
        <TimelineActivity byline="20:00">Activity 4.</TimelineActivity>
        <TimelineActivity byline="12:00">Activity 3.</TimelineActivity>
        <TimelineActivity byline="08:00">Activity 2.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        border="strong"
      >
        <TimelineActivity
          byline={
            <>
              <strong>Kari Nordmann,</strong> last week
            </>
          }
        >
          Start of conversation.
        </TimelineActivity>
      </TimelineSegment>
    </Timeline>
  );
};

export const CollapsingElements = () => {
  return (
    <Timeline>
      <TimelineSegment avatar={skatt} color="company">
        <TimelineActivity
          byline={
            <>
              <strong>Skatteetaten,</strong> today
            </>
          }
        >
          End of conversation.
        </TimelineActivity>
      </TimelineSegment>
      <TimelineSegment icon={DiamondFillIcon} border="dashed" byline="Yesterday 08.00–20.00">
        <div>
          <Button variant="outline">Show all</Button>
        </div>
      </TimelineSegment>
      <TimelineSegment
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        border="strong"
      >
        <TimelineActivity
          byline={
            <>
              <strong>Kari Nordmann,</strong> last week
            </>
          }
        >
          Start of conversation.
        </TimelineActivity>
      </TimelineSegment>
    </Timeline>
  );
};

export const DialogHistory = () => {
  return (
    <Timeline>
      <TimelineHeader avatar={skatt}>
        <strong>Skattetaten</strong> til Kari Nordmann
      </TimelineHeader>
      <TimelineSection margin="bottom" byline="26. februar, kl. 08.00">
        <p>Gratulerer, søknaden din om startsborgerskap er godkjent.</p>
        <h6>1 vedlegg</h6>
        <AttachmentList items={[{ href: '/#1', label: 'Godkjent vedtak.pdf' }]} />
      </TimelineSection>
      <TimelineSegment>
        <TimelineActivity>
          <TransmissionList
            items={[
              {
                id: '2',
                byline: 'I går, kl 08.00',
                sender: skatt,
                createdAtLabel: '25. februar kl 08.00',
                title: 'Søknaden din er godkjent',
                summary: 'Søknad om statsborgerskap er godkjent.',
                attachments: {
                  items: [{ href: '/#1', label: 'Godkjent vedtak.pdf' }],
                },
                badge: {
                  theme: 'base',
                  color: 'success',
                  label: 'Godkjent',
                },
              },
              {
                id: '1',
                byline: '2 uker siden',
                sender: { name: 'Kari Nordmann' },
                createdAtLabel: '11. februar kl 12.25',
                title: 'Søknad om startsborgerskap',
                attachments: {
                  items: [{ href: '/#1', label: 'Kvittering.pdf' }],
                },
              },
            ]}
          />
        </TimelineActivity>
      </TimelineSegment>
      <TimelineFooter>Søknaden ble opprettet</TimelineFooter>
    </Timeline>
  );
};

export const ProcessTimeline = () => {
  return (
    <Timeline>
      <TimelineHeader icon={TeddyBearFillIcon}>
        <strong>Søknad om statsborgerskap</strong>
      </TimelineHeader>
      <TimelineSection margin="section">
        <p>Slik søker du statsborgerskap:</p>
      </TimelineSection>
      <TimelineSegment>
        <TimelineActivity byline="Første steg">Gå på norskkurs.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Andre steg">Ta bergenstesten.</TimelineActivity>
      </TimelineSegment>
      <TimelineSegment>
        <TimelineActivity byline="Tredje steg">Send søknad.</TimelineActivity>
      </TimelineSegment>
      <TimelineFooter>
        <Byline>Gratulerer, du har blitt norsk</Byline>
      </TimelineFooter>
    </Timeline>
  );
};
