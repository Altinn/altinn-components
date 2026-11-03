var w=Object.defineProperty;var n=(o,t)=>w(o,"name",{value:t,configurable:!0});import{a8 as u,a5 as e,b as d}from"./iframe-C2TXN9Gt.js";import{D as c}from"./Dropdown-ClxCQ_oE.js";import{M as g}from"./SearchField-BhmsKdsU.js";import{S as x}from"./ChevronUpDown-B3bkzlBg.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./FieldBase-RJLhkwbG.js";import"./Typography-DMeULRXh.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./useMenu-PLj8_L9k.js";import"./MenuListDivider-DUsmtn09.js";import"./InformationSquare-CbcqUQld.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Q={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu"),W=["DropdownMenu","DrawerMenu"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};export{p as DrawerMenu,s as DropdownMenu,W as __namedExportsOrder,Q as default};
