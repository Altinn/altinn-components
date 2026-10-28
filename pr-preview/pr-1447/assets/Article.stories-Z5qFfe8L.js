var m=Object.defineProperty;var n=(r,t)=>m(r,"name",{value:t,configurable:!0});import{a5 as e,D as c,j as p,i as g,b as v}from"./iframe-zDfzPjQ-.js";import{s as f}from"./skatt-Eb53q4vT.js";import{A as b}from"./Article-BeMJ9uhL.js";import{M as u,a as k,S as h}from"./Metadata-DXTJXeDV.js";import{S as x}from"./ClockDashed-DZjsnkqQ.js";import{S as a}from"./Section-BxkDhIq7.js";import{T as l}from"./Typography-D20OWptm.js";import{A as S}from"./ArticleContact-u6rA4DkW.js";import{B as j}from"./BreadcrumbsLink-D_kHep3B.js";import{A}from"./ArticleHeader-bZmyCeOJ.js";import{D as C}from"./Divider-DfF_JaXt.js";import"./preload-helper-Cc2_yIPf.js";import"./Flex-D4woKuNy.js";import"./MetaItem-CvmLb4XG.js";import"./ProgressIcon-BRIuczuu.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Tooltip-B0sYZQl4.js";import"./useHighlightedText-BKf3y1mD.js";import"./Heading-CKFRzaKs.js";import"./ContactButtons-DHOP3Kxr.js";import"./ButtonIcon-Ck0HIEFU.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonLabel-lbb0L__I.js";import"./ArrowRight-Ce_4bhkg.js";const y=n(({summary:r,children:t})=>e.jsxs(c,{style:{fontSize:"1.125rem"},children:[e.jsx(p,{children:r}),e.jsx(g,{children:t})]}),"PageDetails"),D=n(({items:r})=>e.jsx(a,{children:r?.map(t=>{const{id:s,title:o,children:d}=t;return e.jsx(y,{summary:o,children:e.jsx(l,{children:d})},s)})}),"AccordionSection"),E={title:"Page/Article",tags:["beta"],parameters:{},args:{breadcrumbs:[{label:"Forside"},{label:"Seksjon"},{label:"Side"}],title:"Sidetittel",owner:f,sections:[{id:"1",title:"Section 1",children:"Children 1"},{id:"2",title:"Section 2",children:"Children 2"},{id:"3",title:"Section 3",children:"Children 3"}]}},i=n(()=>{const{breadcrumbs:r,title:t,sections:s}=E.args;return e.jsxs(b,{children:[e.jsx(j,{items:r}),e.jsx(A,{title:t,children:e.jsx(l,{children:e.jsx("p",{children:"Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges."})})}),e.jsxs(a,{align:"start",spacing:4,children:[e.jsx(C,{}),e.jsx(u,{variant:"list",size:"sm",items:[{icon:x,label:"Frist: 11. mai 2024"},{icon:k,label:"Behandlingstid: 14 dager"},{icon:h,label:"Gebyr: 500 kroner"}]}),e.jsx(v,{children:"Endre og levere aksjonærregisteroppgaven"})]}),e.jsx(D,{items:s}),e.jsx(S,{title:"Står du fast?",items:[{label:"Chat med en veileder"},{label:"Ring 75 00 60 00"},{label:"Skriv til Altinn"}],children:e.jsx("p",{children:"Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag."})})]})},"Service"),ee=["Service"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
