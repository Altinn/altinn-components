var w=Object.defineProperty;var o=(t,r)=>w(t,"name",{value:r,configurable:!0});import{aa as u,a7 as e,c as d}from"./iframe-ITS-2hJr.js";import{D as c}from"./Dropdown-wTA40yAo.js";import{M as g}from"./SearchField-BL8KL877.js";import{S as x}from"./ChevronUpDown-B9kTMUXY.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CFIOBciK.js";import"./FieldBase-CQGaRX-e.js";import"./Typography-8PAPF6ji.js";import"./useHighlightedText-B2HymlD1.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./useMenu-Cz88jtED.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./ItemMedia-pMPhCUmI.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./Heading-Bdv6LYG9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./ChevronRight-DGdpC6SO.js";import"./InformationSquare-Cv25qdYy.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
