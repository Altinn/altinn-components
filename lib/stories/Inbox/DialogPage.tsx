import { ActionMenu, Dialog, PageBase } from '../../components';
import type { DialogProps } from '../../components';

interface DialogPageProps {
  dialog: DialogProps;
}

export function DialogPage({ dialog }: DialogPageProps) {
  return (
    <PageBase inset>
      <Dialog {...dialog} />
      <ActionMenu items={dialog?.menu?.items} />
    </PageBase>
  );
}
