var l=Object.defineProperty;var c=(a,s)=>l(a,"name",{value:s,configurable:!0});import{a7 as o,c as p}from"./iframe-uBWg0zsp.js";import{B as d}from"./BreadcrumbsLink-CxH1qZz5.js";import{S as u}from"./ArrowLeft-DWc_uWpj.js";import{F as g}from"./Flex-DndVrHjj.js";import{S as b}from"./ArrowRedo-B8w7jeid.js";import{S as k}from"./ClockDashed-DJcBaFOk.js";import{C as B}from"./ContextMenu-BmGKPgKH.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-DsN3MKzI.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./useHighlightedText-SyZl2q2q.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./Heading-B2wyz-tz.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronRight-Ci7fQup2.js";import"./InformationSquare-D-wVMUGu.js";import"./MenuElipsisHorizontal-PnMCFiJK.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:s,breadcrumbs:i,backButton:n={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:s,children:[i?o.jsx(d,{items:i}):o.jsxs(p,{...n,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:n?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),ao={title:"Page/PageNav",component:f,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const so=["Breadcrumbs","BackButton","BackButtonAndControls"];export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,so as __namedExportsOrder,ao as default};
