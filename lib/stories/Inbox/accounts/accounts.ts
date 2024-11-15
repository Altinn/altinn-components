export const accounts = [
  {
    type: 'person',
    name: 'Aurora Mikalsen',
    selected: true,
  },
  {
    type: 'company',
    name: 'Auroras blomster',
  },
  {
    type: 'company',
    name: 'Aurora bier',
  },
  {
    type: 'company',
    name: 'Auroras bier og blomster',
  },
].map((item, index) => {
  return {
    ...item,
    id: 'a' + index,
  };
});
