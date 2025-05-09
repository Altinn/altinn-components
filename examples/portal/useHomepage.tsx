import { useLayout } from '../';
export const useHomepage = ({ accountId }: { accountId?: string }) => {
  const layout = useLayout({ accountId, color: 'company', theme: 'default' });
  return {
    layout,
  };
};
