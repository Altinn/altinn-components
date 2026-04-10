import{r as u,j as e}from"./iframe-bdb8MxAl.js";import{B as d}from"./Button-CmmCg_X2.js";import{a as g}from"./SearchField-Q9bTEqZH.js";import{D as m}from"./Dropdown-B41Ltmad.js";import{S as w}from"./ChevronUpDown-DUHc-x24.js";import"./preload-helper-PPVm8Dsz.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./index-p3wA3m8m.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./useId-m2lwd_Ct.js";import"./XMark-ml8n1JcF.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Skeleton-BMmeChMq.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./Badge-CZZ-T3gy.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Z={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},i=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,children:e.jsx(g,{...x,size:"sm"})})},l=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer",children:e.jsx(g,{...x,size:"sm"})})},c=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer-dropdown",children:e.jsx(g,{...x,size:"sm"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
        </Button>} open={open} onClose={onClose} placement={placement} variant="drawer-dropdown">
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>;
}`,...c.parameters?.docs?.source}}};const $=["DropdownMenu","DrawerMenu","DrawerOrDropdownMenu"];export{l as DrawerMenu,c as DrawerOrDropdownMenu,i as DropdownMenu,$ as __namedExportsOrder,Z as default};
