import{a7 as o,c}from"./iframe-CSiNS2_t.js";import{B as l}from"./BreadcrumbsLink-Cu-H3rN3.js";import{S as p}from"./ArrowLeft-Cw7hQ914.js";import{F as d}from"./Flex-DavaSday.js";import{S as u}from"./ArrowRedo-mCVhBdC4.js";import{S as g}from"./ClockDashed-oEpq6VsW.js";import{C as b}from"./ContextMenu-DaihOZ4w.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowRight-Dz8Z6Xxm.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./MagnifyingGlass-L16wMwR7.js";import"./FieldBase-rPqTSW37.js";import"./Typography-tfUHPeKu.js";import"./useHighlightedText-Cb4_TuQn.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./useMenu-DQhM8YBj.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./Heading-BPvQUGVy.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ChevronRight-dChxZgZA.js";import"./InformationSquare-BVqQ7zdO.js";import"./MenuElipsisHorizontal-BPxxMSx9.js";const k="_controls_9bu1z_7",B={controls:k},x=({color:n,padding:m,breadcrumbs:a,backButton:s={as:"a",label:"Back"},controls:i})=>o.jsxs(d,{as:"nav",direction:"row",align:"center",justify:"between",color:n,padding:m,children:[a?o.jsx(l,{items:a}):o.jsxs(c,{...s,variant:"ghost",size:"sm",children:[o.jsx(p,{}),o.jsx("span",{children:s?.label||"Back"})]}),i&&o.jsx("div",{className:B.controls,children:i})]}),to={title:"Page/PageNav",component:x,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(b,{id:"context-menu",items:[{id:"1",groupId:"1",icon:u,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:g,title:"Aktivitetslogg"}]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
