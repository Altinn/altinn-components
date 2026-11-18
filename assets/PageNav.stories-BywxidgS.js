var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a6 as o,c as p}from"./iframe-Cf4UALw8.js";import{B as d}from"./BreadcrumbsLink-zy9RVUNR.js";import{S as u}from"./ArrowLeft-CLqAo6G4.js";import{F as g}from"./Flex-CiSMsFR7.js";import{S as b}from"./ArrowRedo-CCAle-YW.js";import{S as k}from"./ClockDashed-BLeXrSnX.js";import{C as B}from"./ContextMenu-DZnF37e0.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-C3hJKAqP.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),eo={title:"Page/PageNav",component:f,tags:["autodocs"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},ao=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
