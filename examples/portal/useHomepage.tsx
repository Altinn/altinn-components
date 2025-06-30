import { useLayout } from '../';

interface UseHomepageProps {
  accountId?: string | null;
}

export const useHomepage = ({ accountId }: UseHomepageProps) => {
  const layout = useLayout({ accountId, color: 'company', theme: 'default' });
  return {
    layout,
  };
};
