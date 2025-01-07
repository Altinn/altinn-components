import React from 'react';
import { PageBase } from '../../components';
import { useAppContext, ActivityLogPage } from './';
export const AdminPage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];

  if (sectionId === "log") {
    return <ActivityLogPage />
  }

  return (
    <PageBase>
      <p>SectionId: {sectionId}</p>
    </PageBase>
  );
};
