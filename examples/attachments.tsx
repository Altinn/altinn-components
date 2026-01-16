import { ExternalLinkIcon } from '@navikt/aksel-icons';
import type { AttachmentLinkProps } from '../lib';

export const attachments: AttachmentLinkProps[] = [
  {
    label: 'Kvittering',
    href: 'Kvittering',
    icon: ExternalLinkIcon,
    metadata: 'Lenke',
  },
  {
    label: '2-0 Kornvig',
    href: '2-0 Kornvig.pdf',
    metadata: 'PDF',
  },
  {
    label: '3-0 Kartum',
    href: '3-0 Kartum.pdf',
    metadata: 'PDF',
    disabled: true,
  },
  {
    label: '3-1 Zinkernagel',
    href: '3-1 Zinkernagel.pdf',
    metadata: 'PDF',
  },
  {
    label: '4-1 Castro',
    href: '4-1 Castro.pdf',
    metadata: 'PDF',
  },
];
