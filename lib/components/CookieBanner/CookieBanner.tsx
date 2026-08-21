'use client';
import cx from 'classnames';
import { useId } from 'react';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import { Heading, Typography } from '../Typography';
import styles from './cookieBanner.module.css';

export interface CookieBannerProps {
  /* Called when consent is granted. Wire it to acceptAll from useConsent. */
  onAccept: () => void;
  /* Called when consent is denied. Wire it to rejectAll from useConsent. */
  onReject: () => void;
  className?: string;
}

/**
 * Asks for cookie consent. It renders whenever it is mounted and does not read the answer itself,
 * so the consumer decides when to show it, normally while useConsent reports isAnswered false.
 */
export const CookieBanner = ({ onAccept, onReject, className }: CookieBannerProps) => {
  const headingId = useId();
  const { languageCode } = useRootContext();
  const texts = getTexts(languageCode);

  return (
    <section className={cx(styles.banner, className)} aria-labelledby={headingId}>
      <div className={styles.content}>
        <Heading id={headingId} size="xl" className={styles.heading}>
          {texts.heading}
        </Heading>
        <Typography as="p" size="md" className={styles.body}>
          {texts.description}
        </Typography>
        <div className={styles.actions}>
          <Button type="button" variant="solid" className={styles.button} onClick={onAccept}>
            {texts.accept}
          </Button>
          <Button type="button" variant="solid" className={styles.button} onClick={onReject}>
            {texts.reject}
          </Button>
        </div>
        <Typography as="p" size="sm" className={styles.necessary}>
          {texts.necessary} <a href={texts.necessaryUrl}>{texts.necessaryLink}</a>
        </Typography>
      </div>
    </section>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        heading: 'Får vi samle informasjon om korleis du bruker nettsida?',
        description:
          'Om du svarer ja, bruker vi i Digdir informasjonen til statistikk og analyse for å forbetre nettsida før innlogging. Du kan endre valet nedst på sida.',
        accept: 'Ja',
        reject: 'Nei',
        necessary: 'Vi lagrar også informasjon fordi det er nødvendig for at nettsida skal fungere.',
        necessaryLink: 'Sjå oversikt over nødvendig informasjon.',
        necessaryUrl: 'https://info.altinn.no/nn/om-altinn/personvern/',
      };
    case 'en':
      return {
        heading: 'Do you allow us to collect information about how you use this website?',
        description:
          'If you agree, Digdir will use the information for statistics and analysis to improve the website before login. You can change your preference at the bottom of the page.',
        accept: 'Yes',
        reject: 'No',
        necessary: 'We also store information that is necessary for the website to work properly.',
        necessaryLink: 'See an overview of necessary information.',
        necessaryUrl: 'https://info.altinn.no/en/about-altinn/privacy/',
      };
    default:
      return {
        heading: 'Får vi samle informasjon om hvordan du bruker nettsiden?',
        description:
          'Hvis du svarer ja, bruker vi i Digdir informasjonen til statistikk og analyse for å forbedre nettsiden før innlogging. Du kan endre valget nederst på siden.',
        accept: 'Ja',
        reject: 'Nei',
        necessary: 'Vi lagrer også informasjon fordi det er nødvendig for at nettsiden skal fungere.',
        necessaryLink: 'Se oversikt over nødvendig informasjon.',
        necessaryUrl: 'https://info.altinn.no/om-altinn/personvern/',
      };
  }
};
