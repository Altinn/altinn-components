import{r as c,j as e}from"./iframe-gnB9S1An.js";import{D as l}from"./Dropdown-C0Ynf067.js";import{S as u}from"./ChevronUpDown-BsjklsEy.js";import{a as d}from"./SearchField-CW2AroNW.js";import{B as g}from"./Button-Cf61aO7p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4jL9APw.js";import"./XMark-F0lxfgWB.js";import"./useId-B9nFNwMW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./useHighlightedText-BAP0b8E_.js";import"./Skeleton-_K166C5F.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./ItemControls-0hV_6Ao9.js";import"./ChevronRight-CmdeYhPT.js";import"./Badge-D2lHyQ6d.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./button-CCpZP8rq.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const Z=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,Z as __namedExportsOrder,Y as default};
