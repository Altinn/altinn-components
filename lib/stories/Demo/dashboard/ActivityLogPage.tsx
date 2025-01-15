import { useNavigation } from '../';
import { Heading, PageBase, PageNav, TimelineBase, TimelineSection, Typography } from '../../../components';
export const ActivityLogPage = () => {
  const { breadcrumbs } = useNavigation();

  return (
    <PageBase spacing={6}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Heading size="xl">Aktivitetslogg</Heading>
      <TimelineBase>
        <TimelineSection dateline="I går kl 08.00">
          <Typography>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
              consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
              elit.
            </p>
          </Typography>
        </TimelineSection>
        <TimelineSection dateline="I går kl 08.00">
          <Typography>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
              consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
              elit.
            </p>
          </Typography>
        </TimelineSection>
        <TimelineSection dateline="I går kl 08.00">
          <Typography>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
              consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
              elit.
            </p>
          </Typography>
        </TimelineSection>
        <TimelineSection dateline="I går kl 08.00">
          <Typography>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed
              consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
              elit.
            </p>
          </Typography>
        </TimelineSection>
      </TimelineBase>
    </PageBase>
  );
};
