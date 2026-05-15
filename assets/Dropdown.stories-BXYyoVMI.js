import{r as c,j as e}from"./iframe-CZMLD2fe.js";import{D as l}from"./Dropdown-Bx0d8Qo_.js";import{S as u}from"./ChevronUpDown-CYrJfMm2.js";import{a as d}from"./SearchField-hPGSgF9W.js";import{B as g}from"./Button-z0ZioQWK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iGjPLQV7.js";import"./XMark-BBRiAlI8.js";import"./useId-Dmu9AgSD.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./button-CZknkFMR.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},ee={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const oe=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,oe as __namedExportsOrder,ee as default};
