var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a6 as o,c as p}from"./iframe-CXqMdlCC.js";import{B as d}from"./BreadcrumbsLink-C3lWgJ2I.js";import{S as u}from"./ArrowLeft-WsT5AO3p.js";import{F as g}from"./Flex-C0b8jFL9.js";import{S as b}from"./ArrowRedo-BZqR55OG.js";import{S as k}from"./ClockDashed-DGlKC4Mz.js";import{C as B}from"./ContextMenu-Cob_wV-j.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-B7D23jat.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./SearchField-BQG9p1mb.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ItemLabel-DvzzIYMd.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronRight-DltnHqdC.js";import"./FieldBase-0KjilGfX.js";import"./Typography-B65oo-6B.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./useMenu-CqtkU6S6.js";import"./InformationSquare-ZHKJrQSE.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),eo={title:"Page/PageNav",component:f,tags:["autodocs"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},ao=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,ao as __namedExportsOrder,eo as default};
