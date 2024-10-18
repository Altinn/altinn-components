import * as AkselIcons from '@navikt/aksel-icons';

const convertName = (str: string) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export const Icon = ({ name = 'inbox' }: { name: string; variant: 'solid' | 'outline' }) => {
  let byIcon = [];
  let byName = {};

  const addRef = ({ name, type, key: string }: { name: string; type: 'solid' | 'outline'; key: string }) => {
    const icon = `<${string} />`;
    if (!byName[name]) {
      byName[name] = {};
    }

    byName[name] = {
      ...byName[name],
      [type]: icon,
    };
  };

  Object.entries(AkselIcons).map(([key]) => {
    const iconName = convertName(key).substring(1);
    let name: string;

    if (iconName.includes('-fill-icon')) {
      name = iconName.replace('-fill-icon', '');
      addRef({ name, type: 'solid', key });
    } else if (iconName.includes('-icon')) {
      name = iconName.replace('-icon', '');
      addRef({ name, type: 'outline', key });
    }

    byIcon.push(key);
  });

  return JSON.stringify(byName);
};
