import{r as c,j as e}from"./iframe-Dip44woq.js";import{D as l}from"./Dropdown-CRmvDx32.js";import{S as u}from"./ChevronUpDown-DLZkoK61.js";import{a as d}from"./SearchField-B2BM1-WP.js";import{B as g}from"./Button-afp2Zwog.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B24kaf2B.js";import"./XMark-CynTM0oO.js";import"./useId-CMLjH0Fx.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./button-CZ5tfceY.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const ee=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,ee as __namedExportsOrder,$ as default};
