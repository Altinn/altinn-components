import React from 'react';
import { PageBase, Section, Heading, Grid, ListBase, ListItem } from '../../components';
import { useAppContext } from './';
import { sitemap } from './data';
import {skatt, helsedir } from "./data/avatar"
export const CategoryHome = () => {
  const { pageId, setPageId } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const parent = sitemap.find((item) => item.id === parentId);

  const menuItems = parent?.items?.map((item) => {
    const id = [parentId, item.id].join('/');

    return {
      ...item,
      as: 'button',
      onClick: () => setPageId(id),
    };
  });

  const list = [
    {
      avatar: skatt,
      title: "For veldedige og allmennyttige organisasjoner (A02)",
      description: "Skatteetaten"
    },
    {
      avatar: helsedir,
      title: "Søknad om autorisasjon og lisens som helsepersonell",
      description: "Helsedirektoratet"
    },
    {
      avatar: skatt,
      title: "For virksomheter uten lønnssystem (A01)",
      description: "Skatteetaten"
    },
    {
      avatar: skatt,
      title: "For virksomheter med lønnssystem (A02)",
      description: "Skatteetaten"
    }
  ]

  return (
    <PageBase spacing='xl' margin='lg'>
      <Section spacing='lg'>
        <Heading size="lg">Alle skjema</Heading>
        <Grid theme="company" spacing="md" cols="1-2-3">
          {menuItems?.map((item) => (
            <ListItem {...item} color="accent" size="xl" />
          ))}
        </Grid>
      </Section>
      <Section spacing='lg'>
        <Heading size="lg">Akkurat nå er dette mye brukt</Heading>
        <ListBase spacing="md">
          {list?.map((item) => (
            <ListItem {...item} size="md" />
          ))}
        </ListBase>
      </Section>
    </PageBase>
  );
};
