import type { DialogListItemProps } from '../../../components';
import {
  extendedLetterDialog,
  reportingCompletedDialog,
  reportingDialog,
  reportingDraftDialog,
  simpleLetterDialog,
  transmissionsDialog,
} from './dialog';

export const dialogs = [
  reportingDialog,
  simpleLetterDialog,
  extendedLetterDialog,
  reportingDraftDialog,
  reportingCompletedDialog,
  transmissionsDialog,
]?.map((item, index) => {
  const id = index + 1;

  return {
    ...item,
    status: item?.status || { value: 'new' },
    id: id.toString(),
  };
});

export const dialogList: DialogListItemProps[] = dialogs?.map((item) => {
  const { id, updatedAt, updatedAtLabel, sender, title, summary, status, attachments } = item;

  const groupId = updatedAt?.slice(0, 7);

  return {
    id,
    groupId,
    updatedAt,
    updatedAtLabel,
    sender,
    title,
    summary,
    status,
    attachmentsCount: attachments?.items.length || 0,
  };
});
