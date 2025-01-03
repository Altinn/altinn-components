import React from 'react';
import { RootProvider } from '../../components';
import { AppProvider, type AppContextInitialValue, AppLayout, AppPage } from '.';

export const App = (initialValue: AppContextInitialValue) => {
  return (
    <RootProvider>
      <AppProvider initialValue={initialValue}>
        <AppLayout>
          <AppPage />
        </AppLayout>
      </AppProvider>
    </RootProvider>
  );
};