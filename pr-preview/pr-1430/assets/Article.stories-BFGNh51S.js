var m=Object.defineProperty;var i=(r,t)=>m(r,"name",{value:t,configurable:!0});import{a7 as e,D as c,k as p,j as g,c as v}from"./iframe-Bv9y2YZF.js";import{s as f}from"./skatt-Eb53q4vT.js";import{A as k}from"./Article-W6Dg3aOu.js";import{M as u,a as b,S as h}from"./Metadata-Ujrml2No.js";import{S}from"./ClockDashed-OPx8LfHd.js";import{S as n}from"./Section-SEwZH98m.js";import{T as l}from"./Typography-AZvc429m.js";import{A as j}from"./ArticleContact-MpJu0Yn2.js";import{B as x}from"./BreadcrumbsLink-9dv1Pynw.js";import{A}from"./ArticleHeader-Byl4MN0I.js";import{D as C}from"./Divider-CX9Qmd6L.js";import"./preload-helper-Cc2_yIPf.js";import"./Flex-k0HwcErc.js";import"./MetaItem-CP29LMD1.js";import"./ProgressIcon-B63tZcct.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Tooltip-DATtufsq.js";import"./useHighlightedText-B3SRW8uR.js";import"./Heading-CDZ3_iYV.js";import"./ContactButtons-BpMz-udD.js";import"./ButtonIcon-BgohvzPZ.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonLabel--Rsf9jsc.js";import"./ArrowRight-CkweDtTF.js";const y=i(({summary:r,children:t})=>e.jsxs(c,{style:{fontSize:"1.125rem"},children:[e.jsx(p,{children:r}),e.jsx(g,{children:t})]}),"PageDetails"),D=i(({items:r})=>e.jsx(n,{children:r?.map(t=>{const{id:a,title:o,children:d}=t;return e.jsx(y,{summary:o,children:e.jsx(l,{children:d})},a)})}),"AccordionSection"),B={title:"Page/Article",tags:["beta"],parameters:{},args:{breadcrumbs:[{label:"Forside"},{label:"Seksjon"},{label:"Side"}],title:"Sidetittel",owner:f,sections:[{id:"1",title:"Section 1",children:"Children 1"},{id:"2",title:"Section 2",children:"Children 2"},{id:"3",title:"Section 3",children:"Children 3"}]}},s=i(()=>{const{breadcrumbs:r,title:t,sections:a}=B.args;return e.jsxs(k,{children:[e.jsx(x,{items:r}),e.jsx(A,{title:t,children:e.jsx(l,{children:e.jsx("p",{children:"Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges."})})}),e.jsxs(n,{align:"start",spacing:4,children:[e.jsx(C,{}),e.jsx(u,{variant:"list",size:"sm",items:[{icon:S,label:"Frist: 11. mai 2024"},{icon:b,label:"Behandlingstid: 14 dager"},{icon:h,label:"Gebyr: 500 kroner"}]}),e.jsx(v,{children:"Endre og levere aksjonærregisteroppgaven"})]}),e.jsx(D,{items:a}),e.jsx(j,{title:"Står du fast?",items:[{label:"Chat med en veileder"},{label:"Ring 75 00 60 00"},{label:"Skriv til Altinn"}],children:e.jsx("p",{children:"Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag."})})]})},"Service");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const ee=["Service"];export{s as Service,ee as __namedExportsOrder,B as default};
