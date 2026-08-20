import{aa as c,a7 as e,c as u}from"./iframe-CfUrJ-sW.js";import{D as m}from"./Dropdown-Dwhf6SNg.js";import{M as d}from"./SearchField-D230b6Yn.js";import{S as g}from"./ChevronUpDown-CuHYzhSe.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./useHighlightedText-DCiIYobu.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./useMenu-VNE_nv00.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./Heading-CC1NzZuf.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ChevronRight-BQqjok9o.js";import"./InformationSquare-BZJWkHLO.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
