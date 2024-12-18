import React from 'react';
import { PageBase, PageNav, PageHeader, Article, Heading, Typography, Toolbar, Button } from '../../components';
import { useAppContext } from './';
import { sitemap } from './data';
export const CategoryArticle = () => {
  const { pageId, setPageId } = useAppContext();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1];
  const articleId = parents?.[2];

  const parent = sitemap.find((item) => item.id === parentId);
  const section = parent?.items.find((item) => item.id === sectionId) || {};
  const article = section?.items.find((item) => item.id === articleId) || {};

  let backIds = []

  const breadcrumbs = [{title: "Forside"}, parent, section, article].filter(item => item.title).map(item => {
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

  const { icon, title } = article

  return (
    <PageBase spacing='lg'>
      <PageNav breadcrumbs={breadcrumbs} />
      <Article spacing='lg'>
        <PageHeader icon={section?.icon} title={title}>
        <Toolbar>
        <div data-theme="company">
        <Button icon="person-group" size="sm" color='secondary'>Gi fullmakt til <strong>{title}</strong></Button>
          </div>
          <div data-theme="neutral">
          <Button icon="bookmark" size="sm" color='secondary'>Legg <strong>{title}</strong> til mine oppgaver</Button>
          </div>
        </Toolbar>
        </PageHeader>

        <Typography>
          <p>Når du betaler ut lønn til ansatte, er det flere rapporteringsplikter du må oppfylle overfor offentlige myndigheter i Norge.  De viktigste rapporteringspliktene inkluderer:</p>
          <ol>

          <li>A-meldingen</li>
          <li>Innbetaling av skattetrekk og arbeidsgiveravgift</li>
          <li>Oppgave over lønns- og trekkoppgaver (årsoppgave)</li>
          <li>Innsending av sykepengekrav</li>
          <li>Pensjonsrapportering</li>
          <li>Rapportering av OTP (Obligatorisk tjenestepensjon)</li>
          </ol>
          </Typography>        
      </Article>
    </PageBase>
  );

};
