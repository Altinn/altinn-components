import{r as c,j as e}from"./iframe-aFNUvxii.js";import{D as l}from"./Dropdown-C8yUJUHT.js";import{S as u}from"./ChevronUpDown-sl0ayiQO.js";import{a as d}from"./SearchField-CnqR4pyv.js";import{B as g}from"./Button-cD6HSwip.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmNdTbFH.js";import"./XMark-BNsj9R6R.js";import"./useId-W_OLMGMd.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useHighlightedText-DGtjyph8.js";import"./Skeleton-Cd5GNeeI.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./ItemControls-BgCWQjxP.js";import"./ChevronRight-B0RIPM-U.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./button-CWls7pzR.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},ee={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
