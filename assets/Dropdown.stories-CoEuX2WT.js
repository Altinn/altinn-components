import{aa as c,a7 as e,c as u}from"./iframe-bg3nhc5C.js";import{D as m}from"./Dropdown-CqGqZ6my.js";import{M as d}from"./SearchField-CjXdfZ37.js";import{S as g}from"./ChevronUpDown-Bdm9ft9T.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./useHighlightedText-Ct2V138i.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./useMenu-DS82y3su.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuListHeading-CPNZr4rU.js";import"./MenuItem-Dnd2bkX1.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./Heading-CqXKSZEg.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./ChevronRight-fbKP0qVJ.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
