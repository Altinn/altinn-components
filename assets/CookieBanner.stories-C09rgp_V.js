import{a7 as s,x as c}from"./iframe-CfUrJ-sW.js";import{C as d}from"./CookieBanner-DTijFDql.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./Typography-CAlmT_0b.js";const h={title:"Surveys and consent/CookieBanner",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onAccept:()=>console.log("Consent granted"),onReject:()=>console.log("Consent denied")}},t=n=>i=>s.jsx(c,{languageCode:n,children:s.jsx(i,{})}),e={args:{}},o={args:{},decorators:[t("nn")]},a={args:{},decorators:[t("en")]},r={args:{heading:"Kan vi bruke informasjonskapsler?",description:"Vi bruker dem til statistikk, og til å huske språkvalget ditt.",necessaryText:s.jsxs(s.Fragment,{children:["Noen informasjonskapsler er nødvendige for at nettsiden skal fungere."," ",s.jsx("a",{href:"https://info.altinn.no/om-altinn/personvern/",children:"Les mer om personvern."})]}),acceptLabel:"Godta",rejectLabel:"Avslå"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source},description:{story:"Only the two handlers are required. The text follows the language set on RootProvider.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [withLanguage('nn')]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [withLanguage('en')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Kan vi bruke informasjonskapsler?',
    description: 'Vi bruker dem til statistikk, og til å huske språkvalget ditt.',
    necessaryText: <>
        Noen informasjonskapsler er nødvendige for at nettsiden skal fungere.{' '}
        <a href="https://info.altinn.no/om-altinn/personvern/">Les mer om personvern.</a>
      </>,
    acceptLabel: 'Godta',
    rejectLabel: 'Avslå'
  }
}`,...r.parameters?.docs?.source},description:{story:"Every string can be replaced, for an application that brings its own translations.",...r.parameters?.docs?.description}}};const f=["Default","Nynorsk","English","CustomText"];export{r as CustomText,e as Default,a as English,o as Nynorsk,f as __namedExportsOrder,h as default};
