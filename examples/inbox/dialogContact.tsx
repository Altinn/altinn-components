import { ChatIcon, MobileSmallIcon, PencilLineIcon } from '@navikt/aksel-icons';

import type { DialogContactProps } from '../../lib';
export const dialogContact: DialogContactProps = {
  title: 'Kontakt oss',
  children: (
    <p>
      Har du spørsmål angående saken din? Ta kontakt med oss. Kundesenteret er betjent mandag–fredag mellom 09-15. Oppgi
      referansenummer XXXX-345.
    </p>
  ),
  items: [
    { icon: ChatIcon, label: 'Chat med oss' },
    { icon: PencilLineIcon, label: 'Skriv til oss' },
    { icon: MobileSmallIcon, label: 'Ring 800 00 000' },
  ],
};
