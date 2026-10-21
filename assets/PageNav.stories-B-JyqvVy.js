var l=Object.defineProperty;var c=(a,s)=>l(a,"name",{value:s,configurable:!0});import{a7 as o,c as p}from"./iframe-CHdTRX1S.js";import{B as d}from"./BreadcrumbsLink-aESNMqqg.js";import{S as u}from"./ArrowLeft-CftGpy39.js";import{F as g}from"./Flex-BzRwEaeD.js";import{S as b}from"./ArrowRedo-B6YCJqkV.js";import{S as k}from"./ClockDashed-L3cqwChJ.js";import{C as B}from"./ContextMenu-D-52UC8M.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-DVUtDFtL.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./ItemMedia-BQC5N1RJ.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ItemControls-D53PO9xK.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./ChevronRight-h2GXZqhR.js";import"./FieldBase-CkHB3870.js";import"./Typography-6g7ttECm.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./useMenu-erQCXILL.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./MenuElipsisHorizontal-BzRZw6re.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:s,breadcrumbs:i,backButton:n={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:s,children:[i?o.jsx(d,{items:i}):o.jsxs(p,{...n,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:n?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),ao={title:"Page/PageNav",component:f,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
