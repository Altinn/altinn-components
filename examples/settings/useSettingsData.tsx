'use client';
import { type ChangeEvent, useState } from 'react';

type SettingsValue = string | number | boolean | undefined;
type Settings = Record<string, SettingsValue>; // You can replace `any` with a stricter type if known

export const useSettingsData = (initialData: Settings = {}) => {
  const [data, setData] = useState<Settings>(initialData);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { type, name, value } = event.target;

    setData((prevState) => {
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
    data,
    onChange,
  };
};
