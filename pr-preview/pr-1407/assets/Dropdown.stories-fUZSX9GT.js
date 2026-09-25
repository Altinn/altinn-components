import{aa as c,a7 as e,c as u}from"./iframe-CsUY_6Pm.js";import{D as m}from"./Dropdown-v8qBzdyM.js";import{M as d}from"./SearchField-R79aEMhJ.js";import{S as g}from"./ChevronUpDown-jcMUlXO8.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./useHighlightedText-CEZnR4nZ.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./useMenu-C86uaFsI.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./ItemLabel-CCNLeNoZ.js";import"./Heading-DbOWCbW_.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ChevronRight-JfwdXccy.js";import"./InformationSquare-DR0XxH_N.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},H={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const J=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,J as __namedExportsOrder,H as default};
