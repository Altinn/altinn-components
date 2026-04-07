import{r as u,j as e}from"./iframe-BTgHnb1V.js";import{B as d}from"./Button-Ccau3b8T.js";import{a as g}from"./SearchField-Dea1MzEn.js";import{D as m}from"./Dropdown-Dca6GJ-b.js";import{S as w}from"./ChevronUpDown-Btx-mwnL.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./index-t_Anj6Qz.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./useId-DWidDjIe.js";import"./XMark-DMQzhoj3.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Icon-PY6OftAR.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},i=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,children:e.jsx(g,{...x,size:"sm"})})},l=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer",children:e.jsx(g,{...x,size:"sm"})})},c=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer-dropdown",children:e.jsx(g,{...x,size:"sm"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
