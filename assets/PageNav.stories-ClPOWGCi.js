import{a7 as o,c}from"./iframe-DWR_BPge.js";import{B as l}from"./BreadcrumbsLink-DNn7cUlp.js";import{S as p}from"./ArrowLeft-CyC47TIC.js";import{F as d}from"./Flex-6ZJb0CGr.js";import{S as u}from"./ArrowRedo-DNPhmF0p.js";import{S as g}from"./ClockDashed-BuHgNuyH.js";import{C as b}from"./ContextMenu-DE4xWtGE.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowRight-BDGEOzRy.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./Heading-DZv3ITVf.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronRight-Byhvri5k.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./MenuElipsisHorizontal-DiWRRmpM.js";const k="_controls_9bu1z_7",B={controls:k},x=({color:n,padding:m,breadcrumbs:a,backButton:s={as:"a",label:"Back"},controls:i})=>o.jsxs(d,{as:"nav",direction:"row",align:"center",justify:"between",color:n,padding:m,children:[a?o.jsx(l,{items:a}):o.jsxs(c,{...s,variant:"ghost",size:"sm",children:[o.jsx(p,{}),o.jsx("span",{children:s?.label||"Back"})]}),i&&o.jsx("div",{className:B.controls,children:i})]}),to={title:"Page/PageNav",component:x,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(b,{id:"context-menu",items:[{id:"1",groupId:"1",icon:u,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:g,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ro=["Breadcrumbs","BackButton","BackButtonAndControls"];export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,ro as __namedExportsOrder,to as default};
