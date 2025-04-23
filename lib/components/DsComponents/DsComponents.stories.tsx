import type { Meta, StoryObj } from '@storybook/react';
import {
  DsAlert,
  DsBadge,
  DsButton,
  DsCheckbox,
  DsChip,
  DsDetails,
  DsDialog,
  DsHeading,
  DsLink,
  DsPagination,
  DsParagraph,
  DsPopover,
  DsSearch,
  DsSkeleton,
  DsSpinner,
  DsTabs,
  DsValidationMessage,
  useDsPagination,
} from './index';

const meta = {
  title: 'Atoms/DsComponents',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Alert: Story = {
  render: () => <DsAlert>This is an alert</DsAlert>,
};

export const Button: Story = {
  render: () => <DsButton>Click me</DsButton>,
};

export const Heading: Story = {
  render: () => <DsHeading>Sample Heading</DsHeading>,
};

export const Paragraph: Story = {
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>,
};

export const Badge: Story = {
  render: () => <DsBadge count={15} maxCount={9} />,
};

export const Spinner: Story = {
  render: () => <DsSpinner aria-label="Loading..." />,
};

export const Checkbox: Story = {
  render: () => <DsCheckbox label="Accept terms and conditions" />,
};

export const Chip: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <DsChip.Radio name="my-chip" defaultChecked>
        Chip Radio
      </DsChip.Radio>
      <DsChip.Checkbox name="my-chip" defaultChecked>
        Chip Checkbox
      </DsChip.Checkbox>
      <DsChip.Removable>Chip Removable</DsChip.Removable>
      <DsChip.Button>Chip Button</DsChip.Button>
    </div>
  ),
};

export const Details: Story = {
  render: () => (
    <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
  ),
};

export const Dialog: Story = {
  render: () => (
    <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog>
        <DsHeading
          style={{
            marginBottom: 'var(--ds-size-2)',
          }}
        >
          Dialog header
        </DsHeading>
        <DsParagraph
          style={{
            marginBottom: 'var(--ds-size-2)',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </DsParagraph>
        <DsParagraph data-size="sm">Dialog footer</DsParagraph>
      </DsDialog>
    </DsDialog.TriggerContext>
  ),
};

export const Link: Story = {
  render: () => (
    <DsLink href="#" target="_">
      Sample Link
    </DsLink>
  ),
};

export const Pagination: Story = {
  render: () => {
    const { pages, prevButtonProps, nextButtonProps } = useDsPagination({
      totalPages: 10,
      showPages: 7,
      currentPage: 1,
    });
    return (
      <DsPagination>
        <DsPagination.List>
          <DsPagination.Item>
            <DsPagination.Button aria-label="Forrige side" {...prevButtonProps}>
              Forrige
            </DsPagination.Button>
          </DsPagination.Item>
          {pages.map(({ page, itemKey, buttonProps }) => (
            <DsPagination.Item key={itemKey}>
              {typeof page === 'number' && (
                <DsPagination.Button {...buttonProps} aria-label={`Side ${page}`}>
                  {page}
                </DsPagination.Button>
              )}
            </DsPagination.Item>
          ))}
          <DsPagination.Item>
            <DsPagination.Button aria-label="Neste side" {...nextButtonProps}>
              Neste
            </DsPagination.Button>
          </DsPagination.Item>
        </DsPagination.List>
      </DsPagination>
    );
  },
};

export const Popover: Story = {
  render: () => (
    <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
  ),
};

export const Search: Story = {
  render: () => (
    <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <DsSkeleton />
      <DsSkeleton width="100px" />
      <DsSkeleton height="20px" />
      <DsSkeleton width="200px" height="50px" />
    </div>
  ),
};

export const Tabs: Story = {
  render: () => (
    <DsTabs defaultValue="value1">
      <DsTabs.List>
        <DsTabs.Tab value="value1">Tab 1</DsTabs.Tab>
        <DsTabs.Tab value="value2">Tab 2</DsTabs.Tab>
        <DsTabs.Tab value="value3">Tab 3</DsTabs.Tab>
      </DsTabs.List>
      <DsTabs.Panel value="value1">content 1</DsTabs.Panel>
      <DsTabs.Panel value="value2">content 2</DsTabs.Panel>
      <DsTabs.Panel value="value3">content 3</DsTabs.Panel>
    </DsTabs>
  ),
};

export const ValidationMessage: Story = {
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>,
};
