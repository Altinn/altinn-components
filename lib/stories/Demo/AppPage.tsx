'use client';
import React from 'react';
import { PageBase } from '../../components';
import { useAppContext, InboxPage, ProfilePage, CategoryPage } from './';

export const AppPage = () => {
  const { pageId } = useAppContext();
  const parents = pageId?.split('/');
  const parentId = parents?.[0];

  switch (parentId) {
    case 'inbox':
      return <InboxPage />;
    case 'profile':
      return <ProfilePage />;
    case 'category':
      return <CategoryPage />;
    default:
      return (
        <PageBase>
          <p>PageId: {pageId}</p>
        </PageBase>
      );
  }
};
