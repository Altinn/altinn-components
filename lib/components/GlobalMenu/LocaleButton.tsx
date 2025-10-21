'use client';
import { GlobeIcon } from '@navikt/aksel-icons';
import { MenuItem } from '../';

export const LocaleButton = ({ onClick }: { onClick: () => void }) => {
  return <MenuItem icon={GlobeIcon} title="Språk/language" onClick={onClick} />;
};
