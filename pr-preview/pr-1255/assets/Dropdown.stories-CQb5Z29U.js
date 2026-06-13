import{aa as c,a7 as e,c as u}from"./iframe-2h8IP8d3.js";import{D as m}from"./Dropdown-BKTHH5xT.js";import{M as d}from"./SearchField-_MN_HrdV.js";import{S as g}from"./ChevronUpDown-_l_w1G-T.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useHighlightedText-CelzCUqF.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},H={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
