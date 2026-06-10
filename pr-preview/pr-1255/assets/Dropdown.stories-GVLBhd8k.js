import{aa as c,a7 as e,c as u}from"./iframe-Dm8TtyEm.js";import{D as m}from"./Dropdown-CZ-eIzfb.js";import{M as d}from"./SearchField-BpAQrR42.js";import{S as g}from"./ChevronUpDown-WNhFs5tk.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./useHighlightedText-C_daNKpv.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./useMenu-C6oFKHtp.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./Heading-o839anme.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ChevronRight-C5Kx_riS.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const H=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,H as __namedExportsOrder,G as default};
