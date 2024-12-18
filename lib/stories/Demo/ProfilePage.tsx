import React from 'react';
import { PageBase } from '../../components';
import { useAppContext } from './';
export const ProfilePage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];

  return (
    <PageBase>
      <p>SectionId: {sectionId}</p>
    </PageBase>
  );
};
