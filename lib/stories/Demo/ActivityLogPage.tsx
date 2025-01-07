import React, {useState} from 'react';
import { PageBase, Toolbar, BookmarksSection, PageHeader, Heading, TimelineBase, TimelineSection, Typography } from '../../components';
import { useAppContext } from './';
import { bookmarks } from './data';
export const ActivityLogPage = () => {
  const { accountMenu } = useAppContext();

  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  return (
    <PageBase spacing="lg" margin="lg">
      <Toolbar accountMenu={accountMenu} />
      <Heading size="xl">Aktivitetslogg</Heading>
        <TimelineBase>
            <TimelineSection dateline="I går kl 08.00"><Typography><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></Typography></TimelineSection>
            <TimelineSection dateline="I går kl 08.00"><Typography><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></Typography></TimelineSection>
            <TimelineSection dateline="I går kl 08.00"><Typography><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></Typography></TimelineSection>
            <TimelineSection dateline="I går kl 08.00"><Typography><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></Typography></TimelineSection>
        </TimelineBase>
    </PageBase>
  );

  return (
    <PageBase spacing="md" margin="lg">
      <Toolbar accountMenu={accountMenu} />
      <PageHeader title="Aktivitetslogg" />
      <BookmarksSection
        title="3 lagrede søk"
        description="Sist oppdatert: 2 timer siden"
        untitled='Uten tittel'
        titleField={{
          label: 'Tittel',
          placeholder: 'Uten tittel',
          helperText: 'Gi bokmerket et navn.',
        }}
        saveButton={{
          label: "Lagre endringer",
          onClick: () => onToggle(expandedId)
        }}
        removeButton={{
          label: "Slett bokmerke"
        }}
        items={bookmarks}
        expandedId={expandedId}
        onToggle={onToggle}
      />
    </PageBase>
  );
};
