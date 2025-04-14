import { useNavigation } from "..";
import { skatt } from "../data/avatar";
import {
  Section,
  ArticleHeader,
  PageBase,
  PageNav,
  Typography,
} from "../../../components";

export const CategoryArticle = () => {
  const { article, breadcrumbs } = useNavigation();
  const title = article?.title;

  return (
    <PageBase spacing={4}>
      <PageNav breadcrumbs={breadcrumbs} />
      <Section as="article" spacing={4}>
        <ArticleHeader
          title={title}
          byline={{ avatar: skatt, children: <strong>Skatteetaten</strong> }}
        >
          <Typography>
            <p>
              Når du betaler ut lønn til ansatte, er det flere
              rapporteringsplikter du må oppfylle overfor offentlige myndigheter
              i Norge. De viktigste rapporteringspliktene inkluderer:
            </p>
          </Typography>
        </ArticleHeader>

        <Typography>
          <p>
            Når du betaler ut lønn til ansatte, er det flere
            rapporteringsplikter du må oppfylle overfor offentlige myndigheter i
            Norge. De viktigste rapporteringspliktene inkluderer:
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
      </Section>
    </PageBase>
  );
};
