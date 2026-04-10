import{r as u,j as e}from"./iframe-CfpleAaJ.js";import{B as d}from"./Button-DKJP6EaO.js";import{a as g}from"./SearchField-DaxLmgu-.js";import{D as m}from"./Dropdown-C9n-MsJ3.js";import{S as w}from"./ChevronUpDown-Cbzggt2f.js";import"./preload-helper-PPVm8Dsz.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./index-C-ZlSrx2.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./useId-CRfl8v3D.js";import"./XMark-Mr05NtnF.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useHighlightedText-Cf92T70c.js";import"./Skeleton-mkQz_xZ6.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Icon-DFklvQ48.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./ChevronRight-F6vNJ-SN.js";import"./Badge-BZbseZdr.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},i=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,children:e.jsx(g,{...x,size:"sm"})})},l=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer",children:e.jsx(g,{...x,size:"sm"})})},c=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer-dropdown",children:e.jsx(g,{...x,size:"sm"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};const Z=["DropdownMenu","DrawerMenu","DrawerOrDropdownMenu"];export{l as DrawerMenu,c as DrawerOrDropdownMenu,i as DropdownMenu,Z as __namedExportsOrder,Y as default};
