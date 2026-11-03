var m=Object.defineProperty;var n=(r,t)=>m(r,"name",{value:t,configurable:!0});import{a5 as e,D as c,j as p,i as g,b as v}from"./iframe-C2TXN9Gt.js";import{s as f}from"./skatt-Eb53q4vT.js";import{A as b}from"./Article-B7wSFl9A.js";import{M as u,a as k,S as h}from"./Metadata-3CrR5oPg.js";import{S as x}from"./ClockDashed-BxyNbPTe.js";import{S as a}from"./Section-SNWVUlRZ.js";import{T as l}from"./Typography-DMeULRXh.js";import{A as S}from"./ArticleContact-B-N8h96c.js";import{B as j}from"./BreadcrumbsLink-DMdCkvNu.js";import{A}from"./ArticleHeader-DJAylQkM.js";import{D as C}from"./Divider-Bl4NdbOx.js";import"./preload-helper-Cc2_yIPf.js";import"./Flex-DqWQ_o-P.js";import"./MetaItem-CWZMm6Ll.js";import"./ProgressIcon-Bw6mQvUI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./Tooltip-DGaFfrCO.js";import"./useHighlightedText-rpsh5ryi.js";import"./Heading-DUZOSHF_.js";import"./ContactButtons-ClGH5pu3.js";import"./ButtonIcon-CnGIKhPB.js";import"./ButtonGroup-BxGjQybR.js";import"./ButtonLabel-BmgMOskN.js";import"./ArrowRight-CvKeCsQH.js";const y=n(({summary:r,children:t})=>e.jsxs(c,{style:{fontSize:"1.125rem"},children:[e.jsx(p,{children:r}),e.jsx(g,{children:t})]}),"PageDetails"),D=n(({items:r})=>e.jsx(a,{children:r?.map(t=>{const{id:s,title:o,children:d}=t;return e.jsx(y,{summary:o,children:e.jsx(l,{children:d})},s)})}),"AccordionSection"),E={title:"Page/Article",tags:["beta"],parameters:{},args:{breadcrumbs:[{label:"Forside"},{label:"Seksjon"},{label:"Side"}],title:"Sidetittel",owner:f,sections:[{id:"1",title:"Section 1",children:"Children 1"},{id:"2",title:"Section 2",children:"Children 2"},{id:"3",title:"Section 3",children:"Children 3"}]}},i=n(()=>{const{breadcrumbs:r,title:t,sections:s}=E.args;return e.jsxs(b,{children:[e.jsx(j,{items:r}),e.jsx(A,{title:t,children:e.jsx(l,{children:e.jsx("p",{children:"Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges."})})}),e.jsxs(a,{align:"start",spacing:4,children:[e.jsx(C,{}),e.jsx(u,{variant:"list",size:"sm",items:[{icon:x,label:"Frist: 11. mai 2024"},{icon:k,label:"Behandlingstid: 14 dager"},{icon:h,label:"Gebyr: 500 kroner"}]}),e.jsx(v,{children:"Endre og levere aksjonærregisteroppgaven"})]}),e.jsx(D,{items:s}),e.jsx(S,{title:"Står du fast?",items:[{label:"Chat med en veileder"},{label:"Ring 75 00 60 00"},{label:"Skriv til Altinn"}],children:e.jsx("p",{children:"Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag."})})]})},"Service"),ee=["Service"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};export{i as Service,ee as __namedExportsOrder,E as default};
