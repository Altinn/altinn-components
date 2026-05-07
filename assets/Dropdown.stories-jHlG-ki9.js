import{r as c,j as e}from"./iframe-BakMcPB9.js";import{D as l}from"./Dropdown-UmxICHKp.js";import{S as u}from"./ChevronUpDown-BQWoe1O9.js";import{a as d}from"./SearchField-rHpPiKo0.js";import{B as g}from"./Button-BJ-P2q8B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./XMark-D8cLqedS.js";import"./useId-Btw-Kuqp.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./useHighlightedText-nzhiVGnc.js";import"./Skeleton-CIZGLt5B.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./Checkmark-Bv6xEUnW.js";import"./Heading-Dpm-6zaj.js";import"./ItemControls-BIaUvdXD.js";import"./ChevronRight-C2TalX8u.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./button-Dqq-cscz.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
