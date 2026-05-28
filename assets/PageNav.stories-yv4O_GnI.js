import{p as o}from"./iframe-43_RSSTf.js";import{B as c}from"./BreadcrumbsLink-9DU_cU_H.js";import{S as l}from"./ArrowLeft-unJoDV_1.js";import{F as p}from"./Flex-CbLPS6D2.js";import{B as d}from"./Button-B83AdZGF.js";import{S as u}from"./ArrowRedo-D8pLRJhO.js";import{S as g}from"./ClockDashed-BtdrgYQX.js";import{C as b}from"./ContextMenu-e6118nKX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9XEmR3s.js";import"./ArrowRight-P2DRNMAa.js";import"./useId-BLkk23cI.js";import"./tooltip-CaRi0lSN.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./XMark-Baw5EL5c.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./MenuElipsisHorizontal-DSMY0Bj5.js";const B="_controls_9bu1z_7",k={controls:B},x=({color:m,padding:n,breadcrumbs:a,backButton:i={as:"a",label:"Back"},controls:s})=>o.jsxs(p,{as:"nav",direction:"row",align:"center",justify:"between",color:m,padding:n,children:[a?o.jsx(c,{items:a}):o.jsxs(d,{...i,variant:"ghost",size:"sm",children:[o.jsx(l,{}),o.jsx("span",{children:i?.label||"Back"})]}),s&&o.jsx("div",{className:k.controls,children:s})]}),mo={title:"Page/PageNav",component:x,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(b,{id:"context-menu",items:[{id:"1",groupId:"1",icon:u,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:g,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const no=["Breadcrumbs","BackButton","BackButtonAndControls"];export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,no as __namedExportsOrder,mo as default};
