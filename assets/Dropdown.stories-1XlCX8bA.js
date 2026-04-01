import{r as u,j as e}from"./iframe-DxxW_Hah.js";import{B as d}from"./Button-CcwbSiKg.js";import{a as g}from"./SearchField-ptc2QeHn.js";import{D as m}from"./Dropdown-_zFGDkyY.js";import{S as w}from"./ChevronUpDown-CXtDHS57.js";import"./preload-helper-PPVm8Dsz.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./index-pOAXHZ6n.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./useId-CckRU7I8.js";import"./XMark-ChXBbXGN.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},i=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,children:e.jsx(g,{...x,size:"sm"})})},l=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer",children:e.jsx(g,{...x,size:"sm"})})},c=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer-dropdown",children:e.jsx(g,{...x,size:"sm"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
