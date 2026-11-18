import { memo } from 'react';
import { SearchField, type SearchFieldProps } from '../Forms';
import { useRootContext } from '../RootProvider';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';

export interface ToolbarSearchProps extends SearchFieldProps {
  collapsible?: boolean;
  /** Advisory text set as the native HTML `title` attribute (tooltip) on the search input. */
  htmlTitle?: string;
}

export const ToolbarSearch = memo(
  ({
    label,
    hideLabel = true,
    value,
    name,
    placeholder,
    loading,
    collapsible,
    clearButtonAltText,
    onChange,
    onClear,
    onKeyDown,
    menu,
    minLength,
    disabled,
    htmlTitle,
  }: ToolbarSearchProps) => {
    const texts = getCommonTexts(useRootContext().languageCode);
    return (
      <SearchField
        size="xs"
        label={label}
        hideLabel={hideLabel}
        value={value}
        name={name}
        title={htmlTitle}
        placeholder={placeholder ?? texts.search}
        clearButtonAltText={clearButtonAltText}
        onChange={onChange}
        onClear={onClear}
        onKeyDown={onKeyDown}
        collapsible={collapsible}
        autoComplete="off"
        autoCapitalize="off"
        type="search"
        minLength={minLength}
        loading={loading}
        menu={menu}
        disabled={disabled}
      />
    );
  },
);
