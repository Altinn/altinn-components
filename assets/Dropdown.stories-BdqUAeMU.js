import{r as c,j as e}from"./iframe-CPVbSj3C.js";import{D as l}from"./Dropdown-CWKVFS9V.js";import{S as u}from"./ChevronUpDown-Dyy32e_j.js";import{a as d}from"./SearchField-B-nnAALe.js";import{B as g}from"./Button-D-Q0AT9s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-yq3MoC.js";import"./XMark-DWjKCZtX.js";import"./useId-CeU55pH0.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Skeleton-O-y9i0gG.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./button-ChrWDnnK.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},ee={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const oe=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,oe as __namedExportsOrder,ee as default};
