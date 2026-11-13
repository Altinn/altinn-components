var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a7 as o,c as p}from"./iframe-r-PzxnFG.js";import{B as d}from"./BreadcrumbsLink-C2WcbWT1.js";import{S as u}from"./ArrowLeft-D3iwA6yf.js";import{F as g}from"./Flex-DRLqoZbu.js";import{S as b}from"./ArrowRedo-DIywjVZv.js";import{S as k}from"./ClockDashed-wZFtld5l.js";import{C as B}from"./ContextMenu-Cek1quhS.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-iKU0eq0k.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),no={title:"Page/PageNav",component:f,tags:["autodocs"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},so=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home'
    }, {
      label: 'Section'
    }, {
      label: 'Article'
    }]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake'
    }
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake'
    },
    controls: <ContextMenu id="context-menu" items={[{
      id: '1',
      groupId: '1',
      icon: ArrowRedoIcon,
      title: 'Del og gi tilgang'
    }, {
      id: '5',
      groupId: '3',
      icon: ClockDashedIcon,
      title: 'Aktivitetslogg'
    }]} />
  }
}`,...e.parameters?.docs?.source}}};export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,so as __namedExportsOrder,no as default};
