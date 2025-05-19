import type { Meta, StoryObj } from '@storybook/react';
import orgs from '../../../examples/logos/orgs.json'
import orgs2 from '../../../examples/logos/orgs2.json'
import { Avatar } from './';
import {Flex} from "../Page";

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Jane Doe',
    type: 'person',
    size: 'xl',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Person: Story = {
  args: {
    type: 'person',
    name: 'Jane Doe',
    size: 'xl',
  },
};

export const Company: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
  },
};

export const Logo: Story = {
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl',
  },
};


export const LogoComparison = () => {
  return (
      <Flex spacing={2} direction="col" padding={2}>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(0, 10).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(10, 20).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(20, 30).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(30, 40).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(40, 50).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(50, 60).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(60, 70).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
        <Flex direction="row" spacing={2}>
          {Object.keys(orgs2.orgs).slice(70).map((org) => {
            const orgFound = orgs.find((o) => org === o.id);
            return (
                <Flex spacing={2} direction="col">
                  <p>Altinn CDN</p>
                  <Avatar
                      key={org}
                      type="company"
                      name={org}
                      imageUrl={orgs2.orgs[org]?.logo}
                      size="md"
                  />
                  <p>OrgLogo</p>
                  <Avatar
                      key={org + '-2'}
                      type="company"
                      name={org}
                      imageUrl={orgFound?.logo}
                      size="md"
                  />
                </Flex>
            )
          })}
        </Flex>
      </Flex>
  )
}

