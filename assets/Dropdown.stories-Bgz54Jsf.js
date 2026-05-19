import{r as c,j as e}from"./iframe-xsOFb0qB.js";import{D as l}from"./Dropdown-DSeVnfau.js";import{S as u}from"./ChevronUpDown-C9PCSFtE.js";import{a as d}from"./SearchField-CkGqv4yc.js";import{B as g}from"./Button-BpTRR-R2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Njje4x.js";import"./XMark-CIyVPbna.js";import"./useId-BSkX16Wf.js";import"./MagnifyingGlass--8bC5kd2.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./button-_KGDSi7k.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},ee={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
