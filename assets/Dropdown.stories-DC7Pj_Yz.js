import{aa as c,a7 as e,c as u}from"./iframe-CvGAoPsc.js";import{D as m}from"./Dropdown-wMqb1yc7.js";import{M as d}from"./SearchField-BnKKet4K.js";import{S as g}from"./ChevronUpDown-C8ASwfc2.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./useHighlightedText-9vbrUFu0.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./useMenu-CZTVrDBq.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuListHeading-CgytQ4SA.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./Heading--2u1ER42.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ChevronRight-CMCEl43v.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
