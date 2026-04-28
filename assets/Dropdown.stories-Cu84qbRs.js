import{r as c,j as e}from"./iframe-DUgQHy5z.js";import{D as l}from"./Dropdown-VwXyzPyy.js";import{S as u}from"./ChevronUpDown-qDB1OsEf.js";import{a as d}from"./SearchField-DrvAfAqD.js";import{B as g}from"./Button-DAj4Vb1f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHKdKrFD.js";import"./XMark-CIC6hSAY.js";import"./useId-BEmmm-9F.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./button-D0axoqj3.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const ee=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,ee as __namedExportsOrder,$ as default};
