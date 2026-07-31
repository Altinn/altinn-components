import{aa as c,a7 as e,c as u}from"./iframe-CAjSv_nS.js";import{D as m}from"./Dropdown-CFFHqeqH.js";import{M as d}from"./SearchField-BeyrM52L.js";import{S as g}from"./ChevronUpDown-pCQGyX3P.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./InformationSquare-CA9knMPH.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
