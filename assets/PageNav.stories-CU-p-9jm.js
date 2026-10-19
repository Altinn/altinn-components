var l=Object.defineProperty;var c=(a,s)=>l(a,"name",{value:s,configurable:!0});import{a7 as o,c as p}from"./iframe-BhbNl8M-.js";import{B as d}from"./BreadcrumbsLink-lneiUb_j.js";import{S as u}from"./ArrowLeft-KTvQayfH.js";import{F as g}from"./Flex-ywhhAUvJ.js";import{S as b}from"./ArrowRedo-B4ji5whx.js";import{S as k}from"./ClockDashed-CjBrcx7s.js";import{C as B}from"./ContextMenu-Ij8B0w81.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-40scby1E.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:s,breadcrumbs:i,backButton:n={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:s,children:[i?o.jsx(d,{items:i}):o.jsxs(p,{...n,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:n?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),ao={title:"Page/PageNav",component:f,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
