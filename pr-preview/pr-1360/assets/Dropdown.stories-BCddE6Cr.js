import{aa as c,a7 as e,c as u}from"./iframe-Drliw4W2.js";import{D as m}from"./Dropdown-B9PzuGtE.js";import{M as d}from"./SearchField-42vl3Hhr.js";import{S as g}from"./ChevronUpDown-CJxKDeGU.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./useHighlightedText-Cu370CX4.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";import"./useMenu-DH_c0Y1A.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./MenuListHeading-B-ydP8rv.js";import"./MenuItem-CDxKhji-.js";import"./ItemMedia-BONexNJs.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./Heading-CnkMiV4w.js";import"./ItemControls-CQnobUv3.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./ChevronRight-_-mAy6yU.js";import"./InformationSquare-DpTm6Ali.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
