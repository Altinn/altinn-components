import { type AppContextInitialValue, AppLayout, AppPage, AppProvider } from '..';
import { RootProvider } from '../../../components';

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
