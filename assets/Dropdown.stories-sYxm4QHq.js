import{s as c,p as e}from"./iframe-WHERbRNQ.js";import{D as l}from"./Dropdown-BvAU1fs3.js";import{M as u}from"./SearchField-CjOGKjR9.js";import{B as d}from"./Button-DkTjWAj1.js";import{S as g}from"./ChevronUpDown-DVQYeyQk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./tooltip-C7TGaz5I.js";import"./Input-D2AEap14.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},X={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(u,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(u,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const Y=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,Y as __namedExportsOrder,X as default};
