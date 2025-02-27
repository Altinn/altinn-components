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
      <TimelineActivity byline="Today, 14:10">
        <p>End of conversation.</p>
      </TimelineActivity>
      <TimelineActivity byline="Yesterday">
        <p>Activity 4.</p>
      </TimelineActivity>
      <TimelineActivity byline="A week ago">
        <p>Activity 3.</p>
      </TimelineActivity>
      <TimelineActivity byline="2 weeks ago">
        <p>Activity 2.</p>
      </TimelineActivity>
      <TimelineActivity byline="Last year">
        <p>Start of conversation.</p>
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
        border="strong"
        byline={
          <>
            <strong>Skattetaten,</strong> today
          </>
        }
      >
        <p>End of conversation.</p>
      </TimelineActivity>
      <TimelineActivity byline="Yesterday">
        <p>Activity 4.</p>
      </TimelineActivity>
      <TimelineActivity border="strong" byline="A week ago" color="inherit">
        <p>Important activity.</p>
      </TimelineActivity>
      <TimelineActivity byline="2 weeks ago">
        <p>Activity 2.</p>
      </TimelineActivity>
      <TimelineActivity
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        border="strong"
        byline={
          <>
            <strong>Kari Nordmann,</strong> last year
          </>
        }
      >
        <p>Start of conversation.</p>
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
        byline={
          <>
            <strong>Skattetaten,</strong> today
          </>
        }
      >
        <p>End of conversation.</p>
      </TimelineActivity>
      <TimelineActivity icon={DiamondFillIcon} border="dashed" margin="page" byline="2 weeks ago – last year">
        <Button variant="outline">Show all</Button>
      </TimelineActivity>
      <TimelineActivity
        avatar={{
          type: 'person',
          name: 'Kari Nordmann',
        }}
        byline={
          <>
            <strong>Kari Nordmann,</strong> last year
          </>
        }
      >
        <p>Start of conversation.</p>
      </TimelineActivity>
    </Timeline>
  );
};

export const DialogHistory = () => {
  return (
    <Timeline>
      <TimelineHeader avatar={skatt}>
        <strong>Skattetaten</strong> til Kari Nordmann
      </TimelineHeader>
      <TimelineSection byline="26. februar, kl. 08.00">
        <p>Gratulerer, søknaden din om startsborgerskap er godkjent.</p>
        <h6>1 vedlegg</h6>
        <AttachmentList items={[{ href: '/#1', label: 'Godkjent vedtak.pdf' }]} />
      </TimelineSection>
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
              attachments: { items: [{ href: '/#1', label: 'Godkjent vedtak.pdf' }] },
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
              attachments: { items: [{ href: '/#1', label: 'Kvittering.pdf' }] },
            },
          ]}
        />
      </TimelineActivity>
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
      <TimelineActivity byline="Første steg">
        <p>Gå på norskkurs.</p>
      </TimelineActivity>
      <TimelineActivity byline="Andre steg">
        <p>Ta bergenstesten.</p>
      </TimelineActivity>
      <TimelineActivity byline="Tredje steg">
        <p>Send søknad.</p>
      </TimelineActivity>
      <TimelineFooter>
        <Byline>Gratulerer, du har blitt norsk</Byline>
      </TimelineFooter>
    </Timeline>
  );
};
