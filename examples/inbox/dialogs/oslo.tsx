import { DialogActions, DialogAttachments } from '../../../lib';
import { oslo } from '../../avatar';

export const nabovarsel = {
  id: 'nabovarsel',
  groupId: '2025-02',
  ariaLabel: 'Nabovarsel for Louises gate 15',
  title: 'Nabovarsel for Louises gate 15',
  status: {
    value: 'not-applicable',
  },
  summary: 'Nabovarsel for byggeplaner i for Louises gate 15, 0169 Oslo (gårdsnr. 118, bruksnr. 366).',
  updatedAt: '2025-02-18T08:54:00.000Z',
  updatedAtLabel: '18. februar 2025 kl. 09.54',
  attachmentsCount: 4,
  sender: oslo,
  dueAt: undefined,
  dueAtLabel: undefined,
  additionalInfo: {
    title: 'Mer informasjon',
    children: (
      <p>
        Hvis du mener at byggeplanene påvirker deg negativt, må du sende inn merknader innen 14 dager. Har du ingen
        merknader trenger du ikke å gjøre noe som helst. Les mer om nabovarsel på{' '}
        <a href="//dibk.no/nabovarsel">dibk.no/nabovarsel</a>.
      </p>
    ),
  },
  children: (
    <>
      <p>Nabovarsel for byggeplaner i for Louises gate 15, 0169 Oslo (gårdsnr. 118, bruksnr. 366).</p>
      <DialogAttachments
        title="6 vedlegg"
        items={[
          {
            href: '#',
            label: 'A10-01 Situasjonsplan.pdf',
          },
          {
            href: '#',
            label: 'A40-01 Fasade Øst.pdf',
          },
          {
            href: '#',
            label: 'Tegning ny fasade.pdf',
          },
          {
            href: '#',
            label: 'Redegjørelse estetikk.pdf',
          },
        ]}
      />
      <DialogActions
        items={[
          {
            id: '1',
            priority: 'secondary',
            label: 'Gi tilbakemelding',
          },
        ]}
      />
    </>
  ),
};
