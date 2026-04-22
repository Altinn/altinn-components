import{r as c,j as e}from"./iframe-Bs6hWG43.js";import{D as l}from"./Dropdown-z94Rg748.js";import{S as u}from"./ChevronUpDown-CVBqxrpS.js";import{a as d}from"./SearchField-CTJqYruH.js";import{B as g}from"./Button-eHvnmE12.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbNSDn3W.js";import"./XMark-Cx14Anho.js";import"./useId-eW1Sa_eP.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Skeleton-7NyHq6Da.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./button-BtRKSTW7.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
