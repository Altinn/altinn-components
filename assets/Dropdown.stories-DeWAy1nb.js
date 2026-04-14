import{r as c,j as e}from"./iframe-DolAyTrH.js";import{D as l}from"./Dropdown-ByKasinV.js";import{S as u}from"./ChevronUpDown-IW27C65d.js";import{a as d}from"./SearchField-O-g-s0at.js";import{B as g}from"./Button-BnKV4VN-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGgdxP5s.js";import"./XMark-DTdVjjyM.js";import"./useId-CHjpN4lF.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./Badge-XZ4zcUXX.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./button-DvTcN5eG.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
