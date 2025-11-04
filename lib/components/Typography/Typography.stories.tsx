import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: (
      <>
        <h2>Heading 2</h2>
        <p>Typography is a wrapper for HTML. Use headings from h2–h6 to create hiearchy.</p>
        <p>Use lists to summarize stuff.</p>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
        <h3>Heading 3</h3>
        <p>Typograhy is a wrapper for HTML.</p>
        <h4>Heading 4</h4>
        <p>Typograhy is a wrapper for HTML.</p>
        <h5>Heading 5</h5>
        <p>Typograhy is a wrapper for HTML.</p>
        <h6>Heading 6</h6>
        <p>Typograhy is a wrapper for HTML.</p>
      </>
    ),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const HighlightWords: Story = {
  args: {
    highlightWords: ['Typography', 'html'],
  },
};

export const Article: Story = {
  args: {
    children: (
      <>
        <h1>Advarsel: Altinn og ID-porten misbrukes i svindelforsøk</h1>
        <p>
          Folk opplever for tiden en bølge av svindelforsøk via e-poster som ser ut som de kommer fra Altinn. Mottakerne
          blir bedt om å klikke på en lenke som tilsynelatende fører til ID-porten. Hensikten med e-postene er
          sannsynligvis å lure til seg sensitiv informasjon eller penger.
        </p>
        <hr />
        <p>
          Svindel-e-postene sier at du må logge inn via ID-porten for å «bekrefte personopplysninger i henhold til ny
          forskrift om digital identitetsbekreftelse». Dette stemmer ikke, e-postene er ikke fra Altinn, og du må ikke
          klikke på lenken.
        </p>
        <p>
          Det er alltid noen som prøver å svindle andre på nett, via e-post, tekstmeldinger eller over telefon. Det
          viktigste rådet for å unngå svindel er at du aldri må oppgi passord, koder eller annen hemmelig informasjon –
          ikke engang til politiet eller banken.
        </p>
        <p>
          <img
            src="https://inte.info.altinn.no/globalassets/bilder-til-artikler/idtyveri-bilde.jpg"
            alt="Illustrasjonsbilde av dame som holder mobil i ene hånden og bankkort i den andre. "
            width="1024"
            height="683"
          />
        </p>
        <p>Her får du noen flere, generelle råd for å unngå å bli svindlet.</p>
        <h2>Dette er vanlige svindelmetoder:</h2>
        <ul>
          <li>
            Misbruk av telefonnummer (spoofing): Det kan se ut som svindleren ringer fra vår brukerstøtte, fra politiet
            eller for eksempel banken – altså noen du vanligvis stoler på. Målet er å få deg til å gi fra deg privat
            informasjon som passord, koder og personopplysninger.
          </li>
          <li>
            Lenker i e-post eller SMS (phishing): Svindleren sender deg en lenke som ser ut som den kommer fra en
            virksomhet du stoler på. De gjør dette for å «fiske» etter informasjon. Målet er å få deg til å klikke på
            lenken og legge igjen personopplysninger, passord og lignende. Vær kritisk. En lenke som fører deg til en
            innlogging eller en nettbutikk kan være en falsk side, selv om den ser ekte ut. Søk heller opp virksomheten
            selv dersom du vil logge inn eller besøke en nettbutikk, bank eller offentlig etat.
          </li>
          <li>
            Svindel på internett og sosiale medier: Vær på vakt når du kommer over nettbutikker med uvanlig gode tilbud.
            Før du handler på en nettside du ikke kjenner fra før, er det lurt å gjøre et søk på internett for å sjekke
            andres erfaringer. Og husk at svindelforsøk også skjer på nettsteder for bruktmarked.
          </li>
        </ul>
        <h2>Tips og råd mot svindel: Stopp, tenk, sjekk!</h2>
        <ul>
          <li>
            Vern om passordene og kodene dine. Ikke del BankID, passord eller sensitive personopplysninger – uansett
            hvem som spør.
          </li>
          <li>
            Vær kritisk til å klikke på lenker du får på e-post og SMS. Søk heller opp nettstedet enn å bruke lenken.
          </li>
          <li>
            Mistanke om at du er i ferd med å bli utsatt for telefonsvindel? Spør etter navnet på den som kontakter deg
            og avslutt samtalen. Ta kontakt via virksomhetens offisielle kanaler. Svindlere som tar kontakt utgir seg
            ofte for å være fra banken din eller politiet, og kan forfalske telefonnummer, e-postadresser og SMS.
          </li>
          <li>
            Vær kritisk til personer som bruker kjærlighetsforhold, investeringer og penger for å komme i kontakt med
            deg. Hvis noe virker for godt til å være sant, så er det som regel det – og det kan være svindel.
          </li>
        </ul>
        <h2>Er du utsatt for svindel og ID-tyveri?</h2>
        <p>Du bør kontakte politiet, banken og forsikringsselskapet ditt dersom du er utsatt for svindel.</p>
        <p>
          <a
            title="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/"
            href="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/"
          >
            Kontakt Politiet
          </a>
        </p>
      </>
    ),
  },
};

export const Article2: Story = {
  args: {
    children: (
      <>
        <h1>Altinns personvernerklæring</h1>
        <p>
          Personvernerklæringen gir informasjon om hvilke personopplysninger som behandles i Altinn-løsningen, og
          hvordan disse brukes. Denne erklæringen oppdateres fortløpende.
        </p>
        <hr />
        <h2>Behandlingsansvarlig</h2>
        <p>
          Alle offentlige virksomheter som deltar i Altinn-samarbeidet, er hver for seg{' '}
          <a
            title="Lenke - ordforklaring behandlingsansvarlig"
            href="https://www.datatilsynet.no/regelverk-og-verktoy/verktoy/ordbok-a-til-a/#B"
          >
            behandlingsansvarlig
          </a>{' '}
          for sine tjenester i Altinn. Dersom du har spørsmål vedrørende personvern for en bestemt tjeneste, kan
          henvendelser rettes til den offentlige virksomheten som eier tjenesten.
        </p>

        <p>
          Digitaliseringsdirektoratet ved direktør er behandlingsansvarlig for personopplysninger i fellesfunksjonalitet
          i Altinn-løsningen. Dette dreier seg om personopplysninger som benyttes til identifisering, autentisering og
          autorisasjon ved innlogging i Altinn, samt personopplysninger i innboksen i Altinn.
          Digitaliseringsdirektoratet er også behandlingsansvarlig for lagring av loggdata av brukeraktiviteter.
        </p>

        <p>
          Har du spørsmål knyttet til personvern ved Digitaliseringsdirektoratet/ Altinn, kan du{' '}
          <a href="mailto:support@altinn.no">kontakte Altinn</a> eller personvernombud ved Digitaliseringsdirektoratet.
        </p>

        <p>
          Gjelder spørsmålet utøvelse av dine rettigheter, har du krav på svar uten ugrunnet opphold og normalt senest
          innen 30 dager.
        </p>

        <h2>Formål</h2>
        <p>
          Formålet med behandlingen av personopplysninger i Altinn, er å tilrettelegge for forenklet og effektivisert
          digital samhandling mellom brukerne og offentlige virksomheter.
        </p>

        <h3>Behandlingsgrunnlag</h3>
        <p>
          <a href="https://www.regjeringen.no/no/dokumenter/digital-kommunikasjon-hovedregel/id751013/">
            Digital kommunikasjon er hovedregelen når forvaltningen kommuniserer med andre
          </a>
          .
        </p>

        <h2>Personopplysninger i Altinn</h2>

        <h3>Innlogging via ID-porten</h3>
        <p>
          For å bruke Altinn, må du benytte en elektronisk ID og logge deg inn via ID-porten. ID-porten er en felles
          innloggingsløsning til offentlige tjenester på internett.
        </p>

        <p>
          I ID-porten kan du velge mellom fem alternativer for elektronisk ID: MinID, BankID på mobil, BankID, Buypass
          eller Commfides. En elektronisk ID er viktig for å bekrefte at du er den du utgir deg for å være.
          <br />
          <a title="Lenke til mer informasjon om ID-porten hos DIFI" href="http://eid.difi.no/nb/id-porten">
            ID-porten blir driftet av Direktoratet for Forvaltning og IKT (Difi)
          </a>
          .
        </p>

        <h3>
          <strong>Kontaktinformasjon</strong>
        </h3>
        <p>
          Kontaktinformasjon som ligger under din Profil i Altinn, hentes fra
          <a href="https://minprofil.kontaktregisteret.no/?locale=nb&amp;continue">
            {' '}
            Kontakt- og reservasjonsregisteret
          </a>
          . Denne informasjonen brukes av offentlige etater til å sende deg varsler og servicemeldinger.
        </p>

        <p>
          Alle virksomheter er pliktig til å registrere en varslingsadresse i Enhetsregisteret. Denne benyttes av Altinn
          til å sende varsler og meldinger fra tjenesteeiere i Altinn til virksomheten. Det er i tillegg mulig å oppføre
          flere varslingsadresser for virksomheten i Altinn. Varslingsadresser kan inneholde personopplysninger som
          personlig e-postadresse og personlig mobilnummer.
        </p>

        <h3>Tilgangsstyring</h3>
        <p>
          Tilgangsstyring i Altinn er basert på roller som er registrert i Enhetsregisteret (for eksempel daglig leder
          og styreleder for en virksomhet) og opplysninger fra Det sentrale folkeregisteret (privatpersoner). Gjennom
          disse rollene får man et sett med Altinn-roller som gir tilgang til tjenestene i Altinn.{' '}
          <a
            title="Lenke til informasjon om roller og rettigheter - og delegering rettigheter."
            href="/hjelp/profil/enkelttjenester-og-roller/"
          >
            Altinn-roller og rettigheter til enkelttjenester kan man delegere for å få utført oppgaver i Altinn
          </a>
          .
        </p>

        <h3>Brukerstyrt samtykke</h3>
        <p>
          Brukerstyrt samtykke gjør det mulig for alle som har avgitt data til én offentlig myndighet å samtykke til at
          dataene deles med andre, også private aktører.
        </p>
      </>
    ),
  },
};

export const Tables: Story = {
  args: {
    children: (
      <>
        <h2>Table example</h2>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 2</h2>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Left</th>
              <th style={{ textAlign: 'center' }}>Center</th>
              <th style={{ textAlign: 'right' }}>Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>Left</td>
              <td style={{ textAlign: 'center' }}>Center</td>
              <td style={{ textAlign: 'right' }}>Right</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Left</td>
              <td style={{ textAlign: 'center' }}>Center</td>
              <td style={{ textAlign: 'right' }}>Right</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 3</h2>
        <table>
          <thead>
            <tr>
              <th>Org.nr.</th>
              <th>Navn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>310229784</td>
              <td>SAMTIDIG EVENTYRLIG TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <td>311771302</td>
              <td>DISKRET DOBBEL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312987694</td>
              <td>MINKENDE LYKKELIG TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>310790311</td>
              <td>OVERMODIG LYSEBLÅ TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312285681</td>
              <td>INTRIKAT FIRKANTET TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>314167783</td>
              <td>LYSEBLÅ KJEMPENDE TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>212982202</td>
              <td>SKRIVEFØR OPPRØMT TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <td>310790389</td>
              <td>KLASSISK USTABIL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <td>312186446</td>
              <td>RETTFERDIG LOGISK TIGER AS KONKURSBO</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 4</h2>
        <table>
          <tbody>
            <tr>
              <th>310229784</th>
              <td>SAMTIDIG EVENTYRLIG TIGER AS TVANGSAVVIKLINGSBO</td>
            </tr>
            <tr>
              <th>311771302</th>
              <td>DISKRET DOBBEL TIGER AS KONKURSBO</td>
            </tr>
            <tr>
              <th>312987694</th>
              <td>MINKENDE LYKKELIG TIGER AS KONKURSBO</td>
            </tr>
          </tbody>
        </table>
        <h2>Table 5</h2>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>K</th>
              <th>V</th>
              <th>U</th>
              <th>T</th>
              <th>Mål</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brann</th>
              <td>26</td>
              <td>17</td>
              <td>3</td>
              <td>6</td>
              <td>59–39</td>
              <td>54</td>
            </tr>
            <tr>
              <th>Stabæk</th>
              <td>26</td>
              <td>14</td>
              <td>6</td>
              <td>6</td>
              <td>53–35</td>
              <td>48</td>
            </tr>
            <tr>
              <th>Viking</th>
              <td>26</td>
              <td>14</td>
              <td>5</td>
              <td>7</td>
              <td>50–40</td>
              <td>47</td>
            </tr>
            <tr>
              <th>Lillestrøm</th>
              <td>26</td>
              <td>12</td>
              <td>8</td>
              <td>6</td>
              <td>47–28</td>
              <td>44</td>
            </tr>
            <tr>
              <th>Rosenborg</th>
              <td>26</td>
              <td>12</td>
              <td>5</td>
              <td>9</td>
              <td>53–39</td>
              <td>41</td>
            </tr>
            <tr>
              <th>Tromsø</th>
              <td>26</td>
              <td>12</td>
              <td>4</td>
              <td>10</td>
              <td>45–44</td>
              <td>40</td>
            </tr>
            <tr>
              <th>Vålerenga</th>
              <td>26</td>
              <td>10</td>
              <td>6</td>
              <td>10</td>
              <td>34–34</td>
              <td>36</td>
            </tr>
            <tr>
              <th>Fredrikstad</th>
              <td>26</td>
              <td>9</td>
              <td>9</td>
              <td>8</td>
              <td>37–40</td>
              <td>36</td>
            </tr>
            <tr>
              <th>Lyn</th>
              <td>26</td>
              <td>10</td>
              <td>4</td>
              <td>12</td>
              <td>43–46</td>
              <td>34</td>
            </tr>
            <tr>
              <th>Strømsgodset</th>
              <td>26</td>
              <td>8</td>
              <td>6</td>
              <td>12</td>
              <td>34–47</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Aalesund</th>
              <td>26</td>
              <td>9</td>
              <td>3</td>
              <td>14</td>
              <td>40–56</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Odd</th>
              <td>26</td>
              <td>8</td>
              <td>3</td>
              <td>15</td>
              <td>33–43</td>
              <td>27</td>
            </tr>
            <tr>
              <th>Start</th>
              <td>26</td>
              <td>6</td>
              <td>8</td>
              <td>12</td>
              <td>34–44</td>
              <td>26</td>
            </tr>
            <tr>
              <th>Sandefjord</th>
              <td>26</td>
              <td>4</td>
              <td>4</td>
              <td>18</td>
              <td>26–53</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
