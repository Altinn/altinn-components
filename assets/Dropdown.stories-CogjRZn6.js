import{r as c,j as e}from"./iframe-DpqvNfuX.js";import{D as l}from"./Dropdown-g5xLWPPm.js";import{S as u}from"./ChevronUpDown-C9vO7jrH.js";import{a as d}from"./SearchField-B4PsSxTf.js";import{B as g}from"./Button-2gJDIHFD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct2h27FF.js";import"./XMark-D5GqdRxj.js";import"./useId-BXmkKvJa.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./useHighlightedText-CsoqNVCh.js";import"./Skeleton-CUXlhXSK.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Icon-DaddCVMS.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./ChevronRight-l4sUB0S3.js";import"./Badge-DH_aKElc.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./button-B0qBlS1p.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},X={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const Y=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,Y as __namedExportsOrder,X as default};
