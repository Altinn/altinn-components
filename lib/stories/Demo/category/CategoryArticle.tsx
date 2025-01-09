import { useNavigation } from '..';
import { Article, Button, PageBase, PageHeader, PageNav, Toolbar, Typography } from '../../../components';
export const CategoryArticle = () => {
  const { section, article, breadcrumbs } = useNavigation();
  const { title } = article;

  return (
    <PageBase spacing={4}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Article spacing={4}>
        <PageHeader icon={section?.icon} title={title}>
          <Toolbar>
            <Button color="person" icon="person-group" size="sm">
              Gi fullmakt til <strong>{title}</strong>
            </Button>
            <Button color="neutral" variant="outline" icon="bookmark" size="sm">
              Legg <strong>{title}</strong> til mine oppgaver
            </Button>
          </Toolbar>
        </PageHeader>

        <Typography>
          <p>
            Når du betaler ut lønn til ansatte, er det flere rapporteringsplikter du må oppfylle overfor offentlige
            myndigheter i Norge. De viktigste rapporteringspliktene inkluderer:
          </p>
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
