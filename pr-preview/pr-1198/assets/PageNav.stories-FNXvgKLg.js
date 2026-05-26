import{j as o}from"./iframe-DU0n7__8.js";import{S as c}from"./ArrowLeft-DUY7tFwk.js";import{F as l}from"./Flex-C_O_eubX.js";import{B as p}from"./BreadcrumbsLink-DMWRlgdL.js";import{B as d}from"./Button-pXyw-iqn.js";import{S as u}from"./ArrowRedo-BCJe7Iwg.js";import{S as g}from"./ClockDashed-BJpd6pOc.js";import{C as b}from"./ContextMenu-ki5GIL8X.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DCXiBgwp.js";import"./index-sAFX08uI.js";import"./ArrowRight-DSxX6LAd.js";import"./tooltip-UENHGvJl.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./XMark-DGVnrVrT.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./useHighlightedText-Wa_y882s.js";import"./Skeleton-etbnaSOo.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";const B="_controls_9bu1z_7",k={controls:B},x=({color:m,padding:n,breadcrumbs:a,backButton:s={as:"a",label:"Back"},controls:i})=>o.jsxs(l,{as:"nav",direction:"row",align:"center",justify:"between",color:m,padding:n,children:[a?o.jsx(p,{items:a}):o.jsxs(d,{...s,variant:"ghost",size:"sm",children:[o.jsx(c,{}),o.jsx("span",{children:s?.label||"Back"})]}),i&&o.jsx("div",{className:k.controls,children:i})]}),io={title:"Page/PageNav",component:x,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(b,{id:"context-menu",items:[{id:"1",groupId:"1",icon:u,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:g,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const mo=["Breadcrumbs","BackButton","BackButtonAndControls"];export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,mo as __namedExportsOrder,io as default};
