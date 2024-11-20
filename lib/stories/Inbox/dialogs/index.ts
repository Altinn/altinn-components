const getSeenBy = ({seenByEndUser, seenByOthersCount}) => {
  const seenByLabel = [];

  if (seenByEndUser) {
    seenByLabel.push('deg');
  }

  if (seenByOthersCount) {
    seenByLabel.push(seenByOthersCount);
  }

  const label = 'Sett av ' + seenByLabel.join('+');

  if (seenByEndUser || seenByOthersCount) {
    return {
      seen: true,
      seenByEndUser,
      seenByOthersCount,
      label
    }
  }

  return null;
}

const getTimeLabel = (timestamp) => {

  const event = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
 
    return event.toLocaleDateString('no-NB', options)

}

import brregCompleted from './brreg-completed.json';
import brregDraft from './brreg-draft.json';
import skatt2023 from './skatt-2023.json';
import sykmeldingReferat from './sykmelding-referat.json';
import enovaInProgress from './enova-in-progress.json';

export const dialogs = [brregDraft, brregCompleted, skatt2023, sykmeldingReferat, enovaInProgress].map((item, index) => {

  return {
    ...item,
    seenBy: getSeenBy(item),
    updatedAtLabel: getTimeLabel(item?.updatedAt),
    id: 'd' + index,
  };
});
