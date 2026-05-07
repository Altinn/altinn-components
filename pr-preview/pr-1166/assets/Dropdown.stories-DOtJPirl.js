import{r as c,j as e}from"./iframe-u1jxS1Oq.js";import{D as l}from"./Dropdown-CanQZVjK.js";import{S as u}from"./ChevronUpDown-pwUGRMmV.js";import{a as d}from"./SearchField-BwnvpNr2.js";import{B as g}from"./Button-BY9-KzE0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuIYfQx6.js";import"./XMark-Bsujigqn.js";import"./useId-MxiBxM6f.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useHighlightedText-Cgx_Ij05.js";import"./Skeleton-vSjDGrjA.js";import"./Label-D4ujXpAq.js";import"./index-Cx6LUCQB.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./ItemControls-GTSartAy.js";import"./ChevronRight-Dx4m7R44.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./button-CanOz9MC.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
