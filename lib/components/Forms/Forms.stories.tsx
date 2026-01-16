import { XMarkIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { Button, Checkbox, Fieldset, Radio, SelectField, Switch, TextField, TextareaField } from '../';
import type { FieldSize } from '../../types/fields.ts';

const meta = {
  title: 'Forms',
  parameters: {},
  args: {},
} satisfies Meta;

export default meta;

const sizes = ['xs', 'sm', 'md', 'lg'] as FieldSize[];

export const Sizes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1em' }}>
      {sizes.map((size) => {
        return (
          <Fieldset key={size} size={size}>
            <div
              style={{
                display: 'flex',
                alignItems: 'end',
                columnGap: '.5em',
              }}
            >
              <TextField placeholder={'Size:' + size} size={size} label="text" />
              <SelectField size={size} label="select">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </SelectField>
              <Button>Button</Button>
              <Button size={size}>
                <span>Button</span>
                <XMarkIcon />
              </Button>
              <Button>
                <XMarkIcon />
                <span>Button</span>
              </Button>
              <Button>
                <XMarkIcon />
              </Button>
            </div>
            <TextareaField label="Textarea" size={size} />
            <Radio size={size} label="Radio" />
            <Checkbox size={size} label="Checkbox" />
            <Switch size={size} label="Switch" />
            <footer
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '.5em',
              }}
            >
              <Button>Primary</Button>
              <Button variant="outline">Secondary</Button>
            </footer>
          </Fieldset>
        );
      })}
    </div>
  );
};
