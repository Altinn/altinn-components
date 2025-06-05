import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import { localeSwitcher } from '../../../examples';
import { LocaleSwitcher, type LocaleSwitcherProps } from './LocaleSwitcher';

const meta = {
  title: 'Layout/LocaleSwitcher',
  component: LocaleSwitcher,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    ...localeSwitcher,
  },
} satisfies Meta<typeof LocaleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Controlled = (args: LocaleSwitcherProps) => {
  const [locale, setLocale] = useState<string>('nb');

  const options = args.options.map((option) => ({
    ...option,
    checked: option.value === locale,
  }));

  return (
    <LocaleSwitcher
      {...args}
      options={options}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setLocale(event.target.value)}
    />
  );

  /*
  return (
    <Header
      {...args}
      menu={{ ...loginMenu, menuLabel: "Meny" }}
      search={search!}
      locale={{
        title: "Velg språk / Choose language",
        options: [
          { label: "Norsk (bokmål)", value: "nb", checked: locale === "nb" },
          { label: "Norsk (nynorsk)", value: "nn", checked: locale === "nn" },
          { label: "English", value: "en", checked: locale === "en" },
        ],
        onChange: (event: ChangeEvent<HTMLInputElement>) => {
          setLocale(event.target.value);
        },
      }}
    />
  );
  */
};
