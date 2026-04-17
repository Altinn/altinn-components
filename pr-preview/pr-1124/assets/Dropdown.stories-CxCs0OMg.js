import{r as c,j as e}from"./iframe-C30XMp4u.js";import{D as l}from"./Dropdown-MMgMxLyt.js";import{S as u}from"./ChevronUpDown-7yy58H4K.js";import{M as d}from"./SearchField-GqHOGaRS.js";import{B as g}from"./Button-DDYo0e3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfjgmy9H.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./button-vIDiYGt4.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
