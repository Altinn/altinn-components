import { DialogAttachments } from '../../lib';
import type { DialogBodyProps } from '../../lib';

export const dialogBody: DialogBodyProps = {
  sender: {
    type: 'company',
    name: 'Statistisk sentralbyrå',
    imageUrl:
      'https://cdn.sanity.io/images/z3it2oa7/production/610b0696bb3c942b0493841b348780535b035275-44x44.png?w=96',
  },
  recipientLabel: 'til',
  recipient: {
    type: 'person',
    name: 'Mottakers navn',
  },
  children: (
    <>
      <p>Rapportering av bedriftsdata er godkjent.</p>
      <DialogAttachments title="1 vedlegg" items={[{ href: '#', label: 'Vedtak om godkjenning.pdf' }]} />
    </>
  ),
  seenByLog: {
    collapsible: true,
    title: 'Sett av deg+3',
    items: [
      {
        id: '1',
        type: 'person',
        name: 'Felix Horn Myhre',
        seenAt: '2025-01-01 08:30',
        seenAtLabel: '1. januar kl 08.30',
      },
      {
        id: '2',
        type: 'person',
        name: 'Mathias Dyngeland',
        isEndUser: true,
        seenAt: '2025-02-03 08:45',
        seenAtLabel: '6. januar kl 08.45',
      },
      {
        id: '3',
        type: 'person',
        name: 'Aune Heggebø',
        seenAt: '2025-04-15 11:22',
        seenAtLabel: '15. april kl 11.22',
      },
    ],
  },
};
