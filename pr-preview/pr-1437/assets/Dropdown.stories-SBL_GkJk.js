var w=Object.defineProperty;var o=(t,r)=>w(t,"name",{value:r,configurable:!0});import{aa as u,a7 as e,c as d}from"./iframe-BXiLaIo1.js";import{D as c}from"./Dropdown-By03aGa-.js";import{M as g}from"./SearchField-CdRvOe5p.js";import{S as x}from"./ChevronUpDown-DV6_CqHG.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./FieldBase-jDY5NJAX.js";import"./Typography-DfF7AP8y.js";import"./useHighlightedText-K6CHyIcM.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./useMenu-CtVMoXgj.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./ItemMedia-VY1kKFwh.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./Heading-BSdWQg6G.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./ChevronRight-CsaEnGk6.js";import"./InformationSquare-BMwsKYTB.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};const Q=["DropdownMenu","DrawerMenu"];export{p as DrawerMenu,s as DropdownMenu,Q as __namedExportsOrder,L as default};
