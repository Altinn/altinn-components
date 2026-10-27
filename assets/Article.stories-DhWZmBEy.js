var m=Object.defineProperty;var n=(r,t)=>m(r,"name",{value:t,configurable:!0});import{a5 as e,D as c,j as p,i as g,b as v}from"./iframe-CplFPuE2.js";import{s as f}from"./skatt-Eb53q4vT.js";import{A as b}from"./Article-BGQKpd_K.js";import{M as u,a as k,S as h}from"./Metadata-CxqW_vr-.js";import{S as x}from"./ClockDashed-Cu0lpOdc.js";import{S as a}from"./Section-CaXjLAlu.js";import{T as l}from"./Typography-pPFkmvZJ.js";import{A as S}from"./ArticleContact-2OcunaNL.js";import{B as j}from"./BreadcrumbsLink-BPjCl2zG.js";import{A}from"./ArticleHeader-nT00xopE.js";import{D as C}from"./Divider-cR4CUUoH.js";import"./preload-helper-Cc2_yIPf.js";import"./Flex-CoXKQauA.js";import"./MetaItem-B6_FqMkL.js";import"./ProgressIcon-DROSM-29.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Tooltip-Dh3mcs7O.js";import"./useHighlightedText-BpzjnQwF.js";import"./Heading-H6e_lYEN.js";import"./ContactButtons-DzDF7kMV.js";import"./ButtonIcon-B77pSTxU.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonLabel-Bdm9dHON.js";import"./ArrowRight-BZ_DNn6R.js";const y=n(({summary:r,children:t})=>e.jsxs(c,{style:{fontSize:"1.125rem"},children:[e.jsx(p,{children:r}),e.jsx(g,{children:t})]}),"PageDetails"),D=n(({items:r})=>e.jsx(a,{children:r?.map(t=>{const{id:s,title:o,children:d}=t;return e.jsx(y,{summary:o,children:e.jsx(l,{children:d})},s)})}),"AccordionSection"),E={title:"Page/Article",tags:["beta"],parameters:{},args:{breadcrumbs:[{label:"Forside"},{label:"Seksjon"},{label:"Side"}],title:"Sidetittel",owner:f,sections:[{id:"1",title:"Section 1",children:"Children 1"},{id:"2",title:"Section 2",children:"Children 2"},{id:"3",title:"Section 3",children:"Children 3"}]}},i=n(()=>{const{breadcrumbs:r,title:t,sections:s}=E.args;return e.jsxs(b,{children:[e.jsx(j,{items:r}),e.jsx(A,{title:t,children:e.jsx(l,{children:e.jsx("p",{children:"Skjemaet brukes til å melde fra om at du tar ansvar for gravferden etter et dødsfall. Det skal fylles ut av en nær etterlatt, som ektefelle, barn eller foreldre. Ved kremasjon og askespredning må Statsforvalterens tillatelse vedlegges."})})}),e.jsxs(a,{align:"start",spacing:4,children:[e.jsx(C,{}),e.jsx(u,{variant:"list",size:"sm",items:[{icon:x,label:"Frist: 11. mai 2024"},{icon:k,label:"Behandlingstid: 14 dager"},{icon:h,label:"Gebyr: 500 kroner"}]}),e.jsx(v,{children:"Endre og levere aksjonærregisteroppgaven"})]}),e.jsx(D,{items:s}),e.jsx(S,{title:"Står du fast?",items:[{label:"Chat med en veileder"},{label:"Ring 75 00 60 00"},{label:"Skriv til Altinn"}],children:e.jsx("p",{children:"Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg med å finne frem i det offentlige, bruke innboksen og gi fullmakter til andre. Åpningstider på telefon og chat er hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag."})})]})},"Service"),ee=["Service"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
