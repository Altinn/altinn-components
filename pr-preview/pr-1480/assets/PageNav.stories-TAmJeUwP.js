var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a7 as o,c as p}from"./iframe-D6r7-MD4.js";import{B as d}from"./BreadcrumbsLink-foBwcV3t.js";import{S as u}from"./ArrowLeft-DG3SX-LK.js";import{F as g}from"./Flex-BbelGz4F.js";import{S as b}from"./ArrowRedo-vlyAcetz.js";import{S as k}from"./ClockDashed-8bhbX2BH.js";import{C as B}from"./ContextMenu-B9oz4ZZo.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-DyaydeNs.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ItemLabel-CjCW6exE.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ChevronRight-B-ItEsH6.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),no={title:"Page/PageNav",component:f,tags:["autodocs"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},so=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
