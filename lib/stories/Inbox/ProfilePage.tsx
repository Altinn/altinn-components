'use client';
import {
  Avatar,
  Heading,
  ListBase,
  ListItem,
  MetaItem,
  PageBase,
  PageHeader,
  SectionBase,
  SectionFooter,
  SectionHeader,
  Typography,
} from '../../components';
import { useProfile } from './';

export function ProfilePage() {
  const { account } = useProfile();

  return (
    <PageBase>
      <PageHeader
        title={account.name}
        description="Fnr: XXXXXXX XXXXX"
        avatar={{ type: account?.type, name: account.name }}
        inset
        padding
        spacing="lg"
        color="white"
        shadow="xs"
      >
        <Typography size="lg">Lorem ipsum dolor sit amet</Typography>
      </PageHeader>
    </PageBase>
  );
}
