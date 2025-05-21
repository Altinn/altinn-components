'use client';
import { type ChangeEvent, useState } from 'react';

type SettingsValue = string | number | boolean | undefined;

type Settings = Record<string, SettingsValue>; // You can replace `any` with a stricter type if known

export const useSettings = (initialData: Settings = {}) => {
  const [settings, setSettings] = useState<Settings>(initialData);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { type, name, value } = event.target;

    setSettings((prevState) => {
      if (type === 'checkbox' && prevState[name]) {
        const newState = { ...prevState };
        delete newState[name];
        return newState;
      }

      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return {
    settings,
    onChange,
  };
};
