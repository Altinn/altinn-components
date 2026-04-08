import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./categoryItems-Cwhajgr8.js";import{n as i,t as a}from"./Metadata-tvb-CNC5.js";import{t as o}from"./ClockDashed-td0kCU9s.js";import{t as s}from"./Hourglass-DLVHH_Xb.js";import{t as c}from"./MenuGrid-BhxXU68n.js";import{t as l}from"./TeddyBear-BOWHyBXM.js";import{t as u}from"./ItemMedia-CyT5D_SF.js";import{t as d}from"./Typography-DBWZN96y.js";import{t as f}from"./Heading-CJB15i5Q.js";import{i as p,o as m,t as h}from"./ListItem-DAJg57C2.js";import{t as g}from"./Button-L6T5IVdq.js";import{t as _}from"./BreadcrumbsLink-D8FBTW55.js";import{t as v}from"./Byline-7aIo_V1-.js";import{t as y}from"./Divider-BKvFBegL.js";import{t as b}from"./Layout-oRerHG_B.js";import{t as x}from"./List-BNjZuxCc.js";import{t as S}from"./Toolbar-CmziBAS7.js";import{t as C}from"./PageBase-C-dLvRYT.js";import{t as w}from"./Grid-DmCi2t9R.js";import{t as T}from"./Section-DYB-4Xyp.js";import{t as E}from"./ArticleHeader-BH6ZpE-5.js";import{t as D}from"./ArticleContact-B9jXdUFX.js";import{t as O}from"./Article-qYLlIv2n.js";import{t as k}from"./useLayout-C1ZVwhw5.js";import{t as A}from"./ssb-C8iMnGdE.js";import{t as j}from"./skatt-Blgau9wG.js";var M={item:`_item_kjtr0_1`},N=n(),P=({color:e=`neutral`,size:t,title:n,summary:r,owner:i,category:a,...o})=>(0,N.jsx)(m,{className:M.item,color:e,size:t,children:(0,N.jsxs)(p,{...o,children:[n&&(0,N.jsx)(f,{as:`h2`,size:`lg`,weight:`bold`,children:n}),i&&(0,N.jsx)(v,{avatar:i,children:i?.name}),r&&(0,N.jsx)(f,{as:`h3`,size:`sm`,variant:`subtle`,weight:`normal`,style:{marginTop:`.5em`},children:r})]})}),F=[...[{id:`1`,owner:j,title:`Melding om lønnet arbeid i hjemmet A04`,summary:`For privatpersoner Skjemaet er for deg som betaler lønn til personer som utfører arbeid i din bolig eller fritidseiendom.`},{id:`2`,owner:A,title:`Undersøkelse om levekår`,summary:`Levekårsundersøkelsen om arbeidsmiljø kartlegger fysisk, ergonomisk og psykososialt arbeidsmiljø samt yrkesrelaterte helseplager og fravær blant sysselsatte.`},{id:`3`,owner:j,title:`Melding om lønnet arbeid i hjemmet A04`,summary:`For privatpersoner Skjemaet er for deg som betaler lønn til personer som utfører arbeid i din bolig eller fritidseiendom.`},{id:`4`,owner:A,title:`Undersøkelse om levekår`,summary:`Levekårsundersøkelsen om arbeidsmiljø kartlegger fysisk, ergonomisk og psykososialt arbeidsmiljø samt yrkesrelaterte helseplager og fravær blant sysselsatte.`},{id:`rf-1086`,owner:j,title:`Aksjonærregisteroppgaven`,summary:`Opplysninger fra selskapene gir Skatteetaten grunnlag til å produsere og sende ut Aksjeoppgaven til aksjonærene. Oppgaven skal hjelpe aksjonærene til å levere rett skattemelding. Den danner også grunnlag for forhåndsutfylling av skattepliktige beløp i skattemeldingen.`,dueAtLabel:`31. januar`,processingLabel:`Umiddelbart (maskinelt)`,priceLabel:`Gratis`}]],I=({accountId:e})=>({layout:k({accountId:e,color:`company`,theme:`default`})}),L=e(t(),1),R=()=>{let[e,t]=(0,L.useState)({});return{filter:{filters:[{name:`category`,label:`Alle kategorier`,items:[{value:`1`,label:`Kategori 1`},{value:`2`,label:`Kategori 2`}].map(e=>({...e,role:`checkbox`,name:`category`}))},{name:`owner`,label:`Alle etater`,items:[{value:`1`,label:`Owner 1`},{value:`2`,label:`Owner 2`}].map(e=>({...e,role:`checkbox`,name:`owner`}))},{name:`target`,label:`Alle brukere`,items:[{value:`1`,label:`For privatpersoner`},{value:`2`,label:`For virksomheter`}].map(e=>({...e,role:`checkbox`,name:`target`}))}],filterState:e,onFilterStateChange:t,removeLabel:`remove`}}},z=({query:e})=>{let t=k({accountId:void 0}),n={items:F};return{query:e,toolbar:R(),results:n,layout:{...t,sidebar:{hidden:!0}}}},B=({accountId:e,categoryId:t,pageId:n})=>{let{layout:i}=I({accountId:e}),a=n&&F.find(e=>e.id===n)||{title:`Page title`,summary:`Summary`},o=t&&r.find(e=>e.id===t)||{id:`category`,title:`Category`},s=[{id:`people`,groupId:`level-1`,icon:c,color:`neutral`,size:`lg`,title:`Alle tjenester`,expanded:!0,items:[{groupId:`level-2`,id:`tema`,size:`md`,icon:l,color:`company`,title:`Tema`,expanded:!0,items:[{id:`c1`,size:`sm`,groupId:`level-3`,title:`Level 3.1`},{groupId:`level-3`,size:`sm`,id:`c2`,title:`Level 3.2`},{groupId:`level-3`,size:`sm`,id:`c3`,title:`Level 3.3`}]}]}],u=[{label:`Forside`},{label:a?.category?.name||`Seksjon`},{label:a?.title||`Side`}].map(e=>({label:e.label.toString()}));return{layout:{...i,sidebar:{menu:{items:s}}},breadcrumbs:u,page:a,category:o}},V={title:`Demo/Portal`,tags:[`beta`],parameters:{layout:`fullscreen`},args:{}},H=()=>{let{layout:e}=I({accountId:void 0});return(0,N.jsx)(b,{...e,children:(0,N.jsxs)(C,{color:`company`,children:[(0,N.jsx)(T,{children:(0,N.jsx)(d,{children:`Logg inn for oversikt over din dialog med det offentlige. Innboks, innstillinger, oversikt over brukere og historikk.`})}),(0,N.jsx)(w,{as:`ul`,cols:3,spacing:4,color:`company`,children:r?.map(e=>(0,L.createElement)(h,{...e,title:{children:e.title,size:`md`,weight:`bold`},variant:`subtle`,size:`lg`,key:e?.href,linkIcon:!0}))})]})})},U=()=>{let{results:e,toolbar:t,layout:n}=z({query:{q:`Lønn`}});return(0,N.jsx)(b,{...n,children:(0,N.jsxs)(C,{color:`company`,children:[(0,N.jsx)(_,{items:[{label:`Forside`,href:`#`},{label:`Søk: Query`}]}),(0,N.jsx)(S,{...t}),(0,N.jsx)(x,{children:e?.items?.map((e,t)=>(0,N.jsxs)(L.Fragment,{children:[(0,N.jsx)(y,{as:`li`}),(0,N.jsx)(P,{...e})]},t))}),(0,N.jsx)(D,{title:`Står du fortsatt fast fast?`,items:[{label:`Chat med en veileder`},{label:`Ring 75 00 60 00`},{label:`Skriv til Altinn`}],children:(0,N.jsxs)(`p`,{children:[`Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.`,` `]})})]})})},W=()=>{let{category:e,layout:t,breadcrumbs:n}=B({accountId:void 0,categoryId:`skatt`});return(0,N.jsx)(b,{...t,children:(0,N.jsxs)(O,{children:[(0,N.jsx)(_,{items:n}),(0,N.jsx)(E,{title:e?.title,children:(0,N.jsx)(d,{children:(0,N.jsx)(`p`,{children:`Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges.`})})}),e?.items&&(0,N.jsx)(x,{size:`sm`,color:`neutral`,children:e.items.map(t=>(0,N.jsx)(h,{title:t.title,icon:e?.icon,variant:`subtle`,linkIcon:!0,badge:(0,N.jsx)(`span`,{"data-size":`xs`,children:`X tjenester`})},t.id))}),(0,N.jsx)(D,{title:`Står du fast?`,items:[{label:`Chat med en veileder`},{label:`Ring 75 00 60 00`},{label:`Skriv til Altinn`}],children:(0,N.jsx)(`p`,{children:`Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.`})})]})})},G=()=>{let{category:e,layout:t,breadcrumbs:n}=B({accountId:void 0,categoryId:`skatt`});return(0,N.jsx)(b,{...t,children:(0,N.jsxs)(O,{children:[(0,N.jsx)(_,{items:n}),(0,N.jsx)(E,{children:(0,N.jsxs)(f,{size:`xl`,style:{display:`flex`,alignItems:`center`,columnGap:`.5em`},children:[(0,N.jsx)(u,{icon:l}),`Lønn`]})}),(0,N.jsx)(d,{children:(0,N.jsx)(`p`,{children:`Når du betaler ut lønn til ansatte, er det flere rapporteringsplikter du må oppfylle overfor offentlige myndigheter i Norge. De viktigste rapporteringspliktene inkluderer:`})}),e?.items&&(0,N.jsx)(x,{size:`sm`,color:`neutral`,spacing:0,children:e.items.map(e=>(0,N.jsxs)(L.Fragment,{children:[(0,N.jsx)(y,{as:`li`}),(0,N.jsx)(P,{title:e.title,summary:`Lorem ipsum dolor sit amet`},e.id)]},e.id))}),(0,N.jsx)(D,{title:`Står du fast?`,items:[{label:`Chat med en veileder`},{label:`Ring 75 00 60 00`},{label:`Skriv til Altinn`}],children:(0,N.jsx)(`p`,{children:`Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.`})})]})})},K=()=>{let{layout:e,breadcrumbs:t,page:n={}}=B({accountId:void 0,pageId:`rf-1086`}),{owner:r,title:c,summary:l}=n;return(0,N.jsx)(b,{...e,children:(0,N.jsxs)(O,{children:[(0,N.jsx)(_,{items:t}),(0,N.jsxs)(E,{title:c,children:[(0,N.jsx)(v,{avatar:r,size:`md`,children:(0,N.jsx)(`strong`,{children:r?.name})}),(0,N.jsx)(d,{children:(0,N.jsx)(`p`,{children:l})})]}),(0,N.jsxs)(T,{align:`start`,spacing:4,children:[(0,N.jsx)(y,{}),(0,N.jsx)(a,{variant:`list`,size:`sm`,items:[{icon:o,label:`Frist: 11. mai 2024`},{icon:s,label:`Behandlingstid: 14 dager`},{icon:i,label:`Gebyr: 500 kroner`}]}),(0,N.jsx)(g,{children:`Endre og levere aksjonærregisteroppgaven`})]}),(0,N.jsx)(D,{title:`Står du fast?`,items:[{label:`Chat med en veileder`},{label:`Ring 75 00 60 00`},{label:`Skriv til Altinn`}],children:(0,N.jsx)(`p`,{children:`Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.`})})]})})},q=()=>{let{layout:e,breadcrumbs:t}=B({accountId:void 0,pageId:`rf-1086`});return(0,N.jsx)(b,{...e,children:(0,N.jsxs)(O,{children:[(0,N.jsx)(_,{items:t}),(0,N.jsxs)(E,{children:[(0,N.jsx)(f,{size:`xl`,as:`h1`,children:`Advarsel: Altinn og ID-porten misbrukes i svindelforsøk`}),(0,N.jsx)(d,{children:(0,N.jsx)(`p`,{children:`Folk opplever for tiden en bølge av svindelforsøk via e-poster som ser ut som de kommer fra Altinn. Mottakerne blir bedt om å klikke på en lenke som tilsynelatende fører til ID-porten. Hensikten med e-postene er sannsynligvis å lure til seg sensitiv informasjon eller penger.`})}),(0,N.jsx)(v,{children:`Sist oppdatert: 09.10.2025`}),(0,N.jsx)(y,{})]}),(0,N.jsx)(d,{children:(0,N.jsxs)(`div`,{className:`rich-text`,children:[(0,N.jsx)(`p`,{children:`Svindel-e-postene sier at du må logge inn via ID-porten for å «bekrefte personopplysninger i henhold til ny forskrift om digital identitetsbekreftelse». Dette stemmer ikke, e-postene er ikke fra Altinn, og du må ikke klikke på lenken.`}),(0,N.jsx)(`p`,{children:`Det er alltid noen som prøver å svindle andre på nett, via e-post, tekstmeldinger eller over telefon. Det viktigste rådet for å unngå svindel er at du aldri må oppgi passord, koder eller annen hemmelig informasjon – ikke engang til politiet eller banken.`}),(0,N.jsx)(`p`,{children:(0,N.jsx)(`img`,{src:`https://inte.info.altinn.no/globalassets/bilder-til-artikler/idtyveri-bilde.jpg`,alt:`Illustrasjonsbilde av dame som holder mobil i ene hånden og bankkort i den andre. `,width:`1024`,height:`683`})}),(0,N.jsx)(`p`,{children:`Her får du noen flere, generelle råd for å unngå å bli svindlet.`}),(0,N.jsx)(`h2`,{children:`Dette er vanlige svindelmetoder:`}),(0,N.jsxs)(`ul`,{children:[(0,N.jsx)(`li`,{children:`Misbruk av telefonnummer (spoofing): Det kan se ut som svindleren ringer fra vår brukerstøtte, fra politiet eller for eksempel banken – altså noen du vanligvis stoler på. Målet er å få deg til å gi fra deg privat informasjon som passord, koder og personopplysninger.`}),(0,N.jsx)(`li`,{children:`Lenker i e-post eller SMS (phishing): Svindleren sender deg en lenke som ser ut som den kommer fra en virksomhet du stoler på. De gjør dette for å «fiske» etter informasjon. Målet er å få deg til å klikke på lenken og legge igjen personopplysninger, passord og lignende. Vær kritisk. En lenke som fører deg til en innlogging eller en nettbutikk kan være en falsk side, selv om den ser ekte ut. Søk heller opp virksomheten selv dersom du vil logge inn eller besøke en nettbutikk, bank eller offentlig etat.`}),(0,N.jsx)(`li`,{children:`Svindel på internett og sosiale medier: Vær på vakt når du kommer over nettbutikker med uvanlig gode tilbud. Før du handler på en nettside du ikke kjenner fra før, er det lurt å gjøre et søk på internett for å sjekke andres erfaringer. Og husk at svindelforsøk også skjer på nettsteder for bruktmarked.`})]}),(0,N.jsx)(`h2`,{children:`Tips og råd mot svindel: Stopp, tenk, sjekk!`}),(0,N.jsxs)(`ul`,{children:[(0,N.jsx)(`li`,{children:`Vern om passordene og kodene dine. Ikke del BankID, passord eller sensitive personopplysninger – uansett hvem som spør.`}),(0,N.jsx)(`li`,{children:`Vær kritisk til å klikke på lenker du får på e-post og SMS. Søk heller opp nettstedet enn å bruke lenken.`}),(0,N.jsx)(`li`,{children:`Mistanke om at du er i ferd med å bli utsatt for telefonsvindel? Spør etter navnet på den som kontakter deg og avslutt samtalen. Ta kontakt via virksomhetens offisielle kanaler. Svindlere som tar kontakt utgir seg ofte for å være fra banken din eller politiet, og kan forfalske telefonnummer, e-postadresser og SMS.`}),(0,N.jsx)(`li`,{children:`Vær kritisk til personer som bruker kjærlighetsforhold, investeringer og penger for å komme i kontakt med deg. Hvis noe virker for godt til å være sant, så er det som regel det – og det kan være svindel.`})]}),(0,N.jsx)(`h2`,{children:`Er du utsatt for svindel og ID-tyveri?`}),(0,N.jsx)(`p`,{children:`Du bør kontakte politiet, banken og forsikringsselskapet ditt dersom du er utsatt for svindel.`}),(0,N.jsx)(`p`,{children:(0,N.jsx)(`a`,{title:`https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/`,href:`https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/`,children:`Kontakt Politiet`})})]})})]})})};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useHomepage({
    accountId: undefined
  });
  return <Layout {...layout}>
      <PageBase color="company">
        <Section>
          <Typography>
            Logg inn for oversikt over din dialog med det offentlige. Innboks,
            innstillinger, oversikt over brukere og historikk.
          </Typography>
        </Section>

        <Grid as="ul" cols={3} spacing={4} color="company">
          {categoryItems?.map(item => <ListItem {...item} title={{
          children: item.title as string,
          size: "md",
          weight: "bold"
        }} variant="subtle" size="lg" key={item?.href} linkIcon={true} />)}
        </Grid>
      </PageBase>
    </Layout>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const {
    results,
    toolbar,
    layout
  } = useSearchResults({
    query: {
      q: "Lønn"
    }
  });
  return <Layout {...layout}>
      <PageBase color="company">
        <Breadcrumbs items={[{
        label: "Forside",
        href: "#"
      }, {
        label: "Søk: Query"
      }]} />
        <Toolbar {...toolbar} />
        <List>
          {results?.items?.map((item, index) => {
          return <Fragment key={index}>
                <Divider as="li" />
                <SearchItem {...item} />
              </Fragment>;
        })}
        </List>
        <ArticleContact title="Står du fortsatt fast fast?" items={[{
        label: "Chat med en veileder"
      }, {
        label: "Ring 75 00 60 00"
      }, {
        label: "Skriv til Altinn"
      }]}>
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.{" "}
          </p>
        </ArticleContact>
      </PageBase>
    </Layout>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const {
    category,
    layout,
    breadcrumbs
  } = useCategoryPage({
    accountId: undefined,
    categoryId: "skatt"
  });
  return <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader title={category?.title as string}>
          <Typography>
            <p>
              Skjemaet brukes til å melde fra om at du tar ansvar for gravferden
              etter et dødsfall. Det skal fylles ut av en nær etterlatt, som
              ektefelle, barn eller foreldre. Ved kremasjon og askespredning må
              Statsforvalterens tillatelse vedlegges.
            </p>
          </Typography>
        </ArticleHeader>

        {category?.items && <List size="sm" color="neutral">
            {category.items.map(item => <ListItem key={item.id} title={item.title} icon={category?.icon} variant="subtle" linkIcon badge={<span data-size="xs">X tjenester</span>} />)}
          </List>}

        <ArticleContact title="Står du fast?" items={[{
        label: "Chat med en veileder"
      }, {
        label: "Ring 75 00 60 00"
      }, {
        label: "Skriv til Altinn"
      }]}>
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const {
    category,
    layout,
    breadcrumbs
  } = useCategoryPage({
    accountId: undefined,
    categoryId: "skatt"
  });
  return <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader>
          <Heading size="xl" style={{
          display: "flex",
          alignItems: "center",
          columnGap: ".5em"
        }}>
            <ItemMedia icon={TeddyBearIcon} />
            Lønn
          </Heading>
        </ArticleHeader>
        <Typography>
          <p>
            Når du betaler ut lønn til ansatte, er det flere
            rapporteringsplikter du må oppfylle overfor offentlige myndigheter i
            Norge. De viktigste rapporteringspliktene inkluderer:
          </p>
        </Typography>

        {category?.items && <List size="sm" color="neutral" spacing={0}>
            {category.items.map(item => <Fragment key={item.id}>
                <Divider as="li" />
                <SearchItem key={item.id} title={item.title as string} summary="Lorem ipsum dolor sit amet" />
              </Fragment>)}
          </List>}

        <ArticleContact title="Står du fast?" items={[{
        label: "Chat med en veileder"
      }, {
        label: "Ring 75 00 60 00"
      }, {
        label: "Skriv til Altinn"
      }]}>
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const {
    layout,
    breadcrumbs,
    page = {}
  } = useCategoryPage({
    accountId: undefined,
    pageId: "rf-1086"
  });
  const {
    owner,
    title,
    summary
  } = page;
  return <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader title={title}>
          <Byline avatar={owner} size="md">
            <strong>{owner?.name}</strong>
          </Byline>
          <Typography>
            <p>{summary}</p>
          </Typography>
        </ArticleHeader>
        <Section align="start" spacing={4}>
          <Divider />
          <Metadata variant="list" size="sm" items={[{
          icon: ClockDashedIcon,
          label: "Frist: 11. mai 2024"
        }, {
          icon: HourglassIcon,
          label: "Behandlingstid: 14 dager"
        }, {
          icon: CardIcon,
          label: "Gebyr: 500 kroner"
        }]} />
          <Button>Endre og levere aksjonærregisteroppgaven</Button>
        </Section>
        <ArticleContact title="Står du fast?" items={[{
        label: "Chat med en veileder"
      }, {
        label: "Ring 75 00 60 00"
      }, {
        label: "Skriv til Altinn"
      }]}>
          <p>
            Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg
            med å finne frem i det offentlige, bruke innboksen og gi fullmakter
            til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30.
            Hvis du skriver til oss svarer vi vanligvis innen en virkedag.
          </p>
        </ArticleContact>
      </Article>
    </Layout>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const {
    layout,
    breadcrumbs
  } = useCategoryPage({
    accountId: undefined,
    pageId: "rf-1086"
  });
  return <Layout {...layout}>
      <Article>
        <Breadcrumbs items={breadcrumbs} />
        <ArticleHeader>
          <Heading size="xl" as="h1">
            Advarsel: Altinn og ID-porten misbrukes i svindelforsøk
          </Heading>
          <Typography>
            <p>
              Folk opplever for tiden en bølge av svindelforsøk via e-poster som
              ser ut som de kommer fra Altinn. Mottakerne blir bedt om å klikke
              på en lenke som tilsynelatende fører til ID-porten. Hensikten med
              e-postene er sannsynligvis å lure til seg sensitiv informasjon
              eller penger.
            </p>
          </Typography>
          <Byline>Sist oppdatert: 09.10.2025</Byline>
          <Divider />
        </ArticleHeader>
        <Typography>
          <div className="rich-text">
            <p>
              Svindel-e-postene sier at du må logge inn via ID-porten for å
              «bekrefte personopplysninger i henhold til ny forskrift om digital
              identitetsbekreftelse». Dette stemmer ikke, e-postene er ikke fra
              Altinn, og du må ikke klikke på lenken.
            </p>
            <p>
              Det er alltid noen som prøver å svindle andre på nett, via e-post,
              tekstmeldinger eller over telefon. Det viktigste rådet for å unngå
              svindel er at du aldri må oppgi passord, koder eller annen
              hemmelig informasjon – ikke engang til politiet eller banken.
            </p>
            <p>
              <img src="https://inte.info.altinn.no/globalassets/bilder-til-artikler/idtyveri-bilde.jpg" alt="Illustrasjonsbilde av dame som holder mobil i ene hånden og bankkort i den andre. " width="1024" height="683" />
            </p>
            <p>
              Her får du noen flere, generelle råd for å unngå å bli svindlet.
            </p>
            <h2>Dette er vanlige svindelmetoder:</h2>
            <ul>
              <li>
                Misbruk av telefonnummer (spoofing): Det kan se ut som
                svindleren ringer fra vår brukerstøtte, fra politiet eller for
                eksempel banken – altså noen du vanligvis stoler på. Målet er å
                få deg til å gi fra deg privat informasjon som passord, koder og
                personopplysninger.
              </li>
              <li>
                Lenker i e-post eller SMS (phishing): Svindleren sender deg en
                lenke som ser ut som den kommer fra en virksomhet du stoler på.
                De gjør dette for å «fiske» etter informasjon. Målet er å få deg
                til å klikke på lenken og legge igjen personopplysninger,
                passord og lignende. Vær kritisk. En lenke som fører deg til en
                innlogging eller en nettbutikk kan være en falsk side, selv om
                den ser ekte ut. Søk heller opp virksomheten selv dersom du vil
                logge inn eller besøke en nettbutikk, bank eller offentlig etat.
              </li>
              <li>
                Svindel på internett og sosiale medier: Vær på vakt når du
                kommer over nettbutikker med uvanlig gode tilbud. Før du handler
                på en nettside du ikke kjenner fra før, er det lurt å gjøre et
                søk på internett for å sjekke andres erfaringer. Og husk at
                svindelforsøk også skjer på nettsteder for bruktmarked.
              </li>
            </ul>
            <h2>Tips og råd mot svindel: Stopp, tenk, sjekk!</h2>
            <ul>
              <li>
                Vern om passordene og kodene dine. Ikke del BankID, passord
                eller sensitive personopplysninger – uansett hvem som spør.
              </li>
              <li>
                Vær kritisk til å klikke på lenker du får på e-post og SMS. Søk
                heller opp nettstedet enn å bruke lenken.
              </li>
              <li>
                Mistanke om at du er i ferd med å bli utsatt for telefonsvindel?
                Spør etter navnet på den som kontakter deg og avslutt samtalen.
                Ta kontakt via virksomhetens offisielle kanaler. Svindlere som
                tar kontakt utgir seg ofte for å være fra banken din eller
                politiet, og kan forfalske telefonnummer, e-postadresser og SMS.
              </li>
              <li>
                Vær kritisk til personer som bruker kjærlighetsforhold,
                investeringer og penger for å komme i kontakt med deg. Hvis noe
                virker for godt til å være sant, så er det som regel det – og
                det kan være svindel.
              </li>
            </ul>
            <h2>Er du utsatt for svindel og ID-tyveri?</h2>
            <p>
              Du bør kontakte politiet, banken og forsikringsselskapet ditt
              dersom du er utsatt for svindel.
            </p>
            <p>
              <a title="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/" href="https://www.politiet.no/tjenester/anmelde/anmelde-svindel-og-id-tyveri/">
                Kontakt Politiet
              </a>
            </p>
          </div>
        </Typography>
      </Article>
    </Layout>;
}`,...q.parameters?.docs?.source}}};var J=[`Home`,`Search`,`Category`,`Topic`,`Service`,`ArticlePage`];export{q as ArticlePage,W as Category,H as Home,U as Search,K as Service,G as Topic,J as __namedExportsOrder,V as default};