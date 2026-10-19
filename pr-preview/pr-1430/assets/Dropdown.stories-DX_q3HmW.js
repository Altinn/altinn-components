var w=Object.defineProperty;var o=(t,r)=>w(t,"name",{value:r,configurable:!0});import{aa as u,a7 as e,c as d}from"./iframe-Bv9y2YZF.js";import{D as c}from"./Dropdown-DQyu8KYK.js";import{M as g}from"./SearchField-Bk5qe-oT.js";import{S as x}from"./ChevronUpDown-DgipHcom.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./useHighlightedText-B3SRW8uR.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./Heading-CDZ3_iYV.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronRight-B_ztNHmN.js";import"./InformationSquare-BoyRK6zF.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};const Q=["DropdownMenu","DrawerMenu"];export{p as DrawerMenu,s as DropdownMenu,Q as __namedExportsOrder,L as default};
