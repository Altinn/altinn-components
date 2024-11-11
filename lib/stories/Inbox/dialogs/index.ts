import brregCompleted from './brreg-completed.json';
import brregDraft from './brreg-draft.json';
import skatt2023 from './skatt-2023.json';

export const dialogs = [brregDraft, brregCompleted, skatt2023].map((item, index) => {
  return {
    ...item,
    id: 'd' + index,
  };
});
