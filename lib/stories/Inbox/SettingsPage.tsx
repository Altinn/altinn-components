'use client';
import {
  Heading,
  ListBase,
  ListItem,
  MetaItem,
  PageBase,
  SectionBase,
  SectionFooter,
  SectionHeader,
  Typography,
} from '../../components';
import { useProfile } from './';

export function SettingsPage() {
  const { account } = useProfile;

  return <PageBase inset>{JSON.stringify(account)}</PageBase>;
}
