import{r as c,j as e}from"./iframe-C6Awlou2.js";import{D as l}from"./Dropdown-A06NMf9H.js";import{S as u}from"./ChevronUpDown-ge_2OXZE.js";import{a as d}from"./SearchField-BUnYpq_7.js";import{B as g}from"./Button-xDUaTd0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./Label-C48-SpFn.js";import"./tooltip-wBWP-9p3.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},W={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  title = 'Meny',
  placement
}: DropdownProps) => {
  const [open, setOpen] = useState(true);
  const onToggle = () => {
    setOpen(prev => !prev);
  };
  const onClose = () => {
    setOpen(false);
  };
  return <Dropdown trigger={<Button size="xs" variant="primary" onClick={onToggle}>
          <span>{title}</span>
          <ChevronUpDownIcon />
        </Button>} open={open} onClose={onClose} placement={placement}>
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  title = 'Meny',
  placement
}: DropdownProps) => {
  const [open, setOpen] = useState(true);
  const onToggle = () => {
    setOpen(prev => !prev);
  };
  const onClose = () => {
    setOpen(false);
  };
  return <Dropdown trigger={<Button size="xs" variant="primary" onClick={onToggle}>
          <span>{title}</span>
          <ChevronUpDownIcon />
        </Button>} open={open} onClose={onClose} placement={placement} variant="drawer">
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>;
}`,...r.parameters?.docs?.source}}};const X=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,X as __namedExportsOrder,W as default};
