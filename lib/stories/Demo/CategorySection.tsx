import React from 'react';
import { PageBase, PageNav, PageHeader, Article, Heading, Typography, ListBase, ListItem } from '../../components';
import { useAppContext } from './';
import { sitemap } from './data';
export const CategorySection = () => {
  const { pageId, setPageId } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1];


    const parent = sitemap.find((item) => item.id === parentId);
    const section = parent?.items.find((item) => item.id === sectionId) || {};

    let backIds = []

    const breadcrumbs = [{title: "Forside"}, parent, section].filter(item => item.title).map(item => {
      const { id, title } = item

      id && backIds.push(id)

      const backId = backIds.join("/")
      
      return {
        ...item,
        label: title,
        as: "button",
        onClick: () => setPageId(backId)

      }
    })

    const { icon, title } = section;

    const list = section?.items.map(item => {

        const { id, title, icon } = item;

        const itemId = [parentId, sectionId, id].join("/")

        return {
            as: "button",
            onClick: () => setPageId(itemId),
            icon,
            title,
            linkText: "5 tjenester",
            menu: {
                id: ["menu", id].join("-"),
                items: [
                    { title: "Lorem"},
                    { title: "Ipsum"},
                    { title: "Dolor"}
                ]
            }
        }
    })

    return (
      <PageBase spacing='lg'>
        <PageNav breadcrumbs={breadcrumbs} />
        <Article spacing='lg'>
            <PageHeader icon={icon} title={title} />
            <Typography><p>Når du betaler ut lønn til ansatte, er det flere rapporteringsplikter du må oppfylle overfor offentlige myndigheter i Norge. De viktigste rapporteringspliktene inkluderer:</p></Typography>

            <ListBase>
                {list?.map(item => <ListItem {...item} />)}
            </ListBase>

        </Article>
      </PageBase>
    );
};
