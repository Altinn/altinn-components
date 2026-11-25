var m=Object.defineProperty;var n=(r,t)=>m(r,"name",{value:t,configurable:!0});import{a6 as e,D as c,k as p,j as g,c as v}from"./iframe-Df5nkPs8.js";import{s as f}from"./skatt-Eb53q4vT.js";import{A as k}from"./Article-DLKenHgA.js";import{M as u,a as b,S as h}from"./Metadata-DmiYY_ta.js";import{S as x}from"./ClockDashed-ChwTcSEw.js";import{S as a}from"./Section-CNSG608H.js";import{T as l}from"./Typography-W78b6WhV.js";import{A as S}from"./ArticleContact-m_5ksFNd.js";import{B as j}from"./BreadcrumbsLink-C2L4Ui-h.js";import{A}from"./ArticleHeader-D_yA3Sdc.js";import{D as C}from"./Divider-CRFwcBoK.js";import"./preload-helper-Cc2_yIPf.js";import"./Flex-CYtO0dFj.js";import"./MetaItem-DrFy_Plg.js";import"./ProgressIcon-BU2NqWfB.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./Tooltip-KOhXDwFj.js";import"./useHighlightedText-BM0MIdsX.js";import"./Heading-CPiHedua.js";import"./ButtonIcon-yAUUau4A.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonLabel-DPkO8s9u.js";import"./ArrowRight-DrBNAp4X.js";const y=n(({summary:r,children:t})=>e.jsxs(c,{style:{fontSize:"1.125rem"},children:[e.jsx(p,{children:r}),e.jsx(g,{children:t})]}),"PageDetails"),D=n(({items:r})=>e.jsx(a,{children:r?.map(t=>{const{id:s,title:o,children:d}=t;return e.jsx(y,{summary:o,children:e.jsx(l,{children:d})},s)})}),"AccordionSection"),E={title:"Page/Article",parameters:{},args:{breadcrumbs:[{label:"Forside"},{label:"Seksjon"},{label:"Side"}],title:"Sidetittel",owner:f,sections:[{id:"1",title:"Section 1",children:"Children 1"},{id:"2",title:"Section 2",children:"Children 2"},{id:"3",title:"Section 3",children:"Children 3"}]}},i=n(()=>{const{breadcrumbs:r,title:t,sections:s}=E.args;return e.jsxs(k,{children:[e.jsx(j,{items:r}),e.jsx(A,{title:t,children:e.jsx(l,{children:e.jsx("p",{children:"Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges."})})}),e.jsxs(a,{align:"start",spacing:4,children:[e.jsx(C,{}),e.jsx(u,{variant:"list",size:"sm",items:[{icon:x,label:"Frist: 11. mai 2024"},{icon:b,label:"Behandlingstid: 14 dager"},{icon:h,label:"Gebyr: 500 kroner"}]}),e.jsx(v,{children:"Endre og levere aksjonærregisteroppgaven"})]}),e.jsx(D,{items:s}),e.jsx(S,{title:"Står du fast?",items:[{label:"Chat med en veileder"},{label:"Ring 75 00 60 00"},{label:"Skriv til Altinn"}],children:e.jsx("p",{children:"Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag."})})]})},"Service"),$=["Service"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    breadcrumbs,
    title,
    sections
  } = meta.args;
  return <Article>
      <Breadcrumbs items={breadcrumbs} />
      <ArticleHeader title={title}>
        <Typography>
          <p>
            Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av
            en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens
            tillatelse vedlegges.
          </p>
        </Typography>
      </ArticleHeader>
      <Section align="start" spacing={4}>
        <Divider />
        <Metadata variant="list" size="sm" items={[{
        icon: ClockDashedIcon,
        label: 'Frist: 11. mai 2024'
      }, {
        icon: HourglassIcon,
        label: 'Behandlingstid: 14 dager'
      }, {
        icon: CardIcon,
        label: 'Gebyr: 500 kroner'
      }]} />
        <Button>Endre og levere aksjonærregisteroppgaven</Button>
      </Section>
      <AccordionSection items={sections} />
      <ArticleContact title="Står du fast?" items={[{
      label: 'Chat med en veileder'
    }, {
      label: 'Ring 75 00 60 00'
    }, {
      label: 'Skriv til Altinn'
    }]}>
        <p>
          Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke
          innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du
          skriver til oss svarer vi vanligvis innen en virkedag.
        </p>
      </ArticleContact>
    </Article>;
}`,...i.parameters?.docs?.source}}};export{i as Service,$ as __namedExportsOrder,E as default};
