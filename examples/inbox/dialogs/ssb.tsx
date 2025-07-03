import { DialogActions } from '../../../lib';
import { ssb } from '../../avatar';

export const ssbAttention = {
  id: 'bedriftsdata-attention',
  groupId: '2025-03',
  title: 'Rapportering av bedriftsdata',
  status: { value: 'requires-attention', label: 'Krever handling' },
  summary: 'Du må levere bedriftsdata innen 31. mai.',
  updatedAt: '2025-02-14T23:27:37.383Z',
  updatedAtLabel: '15. februar 2025 kl. 00.27',
  attachmentsCount: 1,
  dueAt: '2025-05-31T21:59:59.999Z',
  dueAtLabel: 'Frist: 31. mai 2025',
  sender: ssb,
  badge: { theme: 'surface', label: 'Ulest' },
  children: (
    <>
      <p>Du må levere bedriftsdata innen 31. mai.</p>
      <DialogActions items={[{ id: '1', priority: 'primary', label: 'Til rapportering' }]} />
    </>
  ),
};
