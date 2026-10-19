var w=Object.defineProperty;var o=(t,r)=>w(t,"name",{value:r,configurable:!0});import{aa as u,a7 as e,c as d}from"./iframe-C7zNVDTT.js";import{D as c}from"./Dropdown-ONE2NNEY.js";import{M as g}from"./SearchField-DGzlCViu.js";import{S as x}from"./ChevronUpDown-R0HlDPZA.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useHighlightedText-CLjqXK08.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./Heading-gv6s55oV.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./InformationSquare-BvDWZ3oM.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
