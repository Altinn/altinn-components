import{aa as c,a7 as e,c as u}from"./iframe-BlxKDeRn.js";import{D as m}from"./Dropdown-CwQ5F4MG.js";import{M as d}from"./SearchField-CTOOlDoc.js";import{S as g}from"./ChevronUpDown-Dd58bz3G.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./useMenu-BkS0Vn46.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./Heading-PlHpJzKQ.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ChevronRight-DNG7F-LS.js";import"./InformationSquare-D-Ph66nw.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const H=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,H as __namedExportsOrder,G as default};
