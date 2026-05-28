import{s as c,p as e}from"./iframe-43_RSSTf.js";import{D as l}from"./Dropdown-CGlaKjlH.js";import{M as u}from"./SearchField-QwXAT1yz.js";import{B as d}from"./Button-B83AdZGF.js";import{S as g}from"./ChevronUpDown-BESXpFlz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9XEmR3s.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Label-DtAXMx4b.js";import"./tooltip-CaRi0lSN.js";import"./Input-B-eeYerN.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},X={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(u,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(u,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
