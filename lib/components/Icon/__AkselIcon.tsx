import * as AkselIcons from "@navikt/aksel-icons";

const convertName = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export const Icon = ({ name = "inbox", variant = "outline" }) => {
  let byIcon = [];
  let byName = {};

  const addRef = ({ name, type, icon }) => {
    if (!name) {
      return;
    }

    if (!byName[name]) {
      byName[name] = {};
    }

    byName[name] = {
      ...byName[name],
      [type]: icon,
    };
  };

  Object.entries(AkselIcons).map(([key, Icon]) => {
    const iconName = convertName(key).substr(1);

    let name;

    if (iconName.includes("-fill-icon")) {
      name = iconName.replace("-fill-icon", "");
      addRef({ name, type: "solid", icon: "<" + key + " />" });
    } else if (iconName.includes("-icon")) {
      name = iconName.replace("-icon", "");
      addRef({ name, type: "outline", icon: "<" + key + " />" });
    }

    byIcon.push(key);
  });

  //  return JSON.stringify(byIcon?.join(", "));
  return JSON.stringify(byName);
};
