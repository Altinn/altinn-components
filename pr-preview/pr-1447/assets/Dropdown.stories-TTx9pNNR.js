var w=Object.defineProperty;var o=(t,r)=>w(t,"name",{value:r,configurable:!0});import{aa as u,a7 as e,c as d}from"./iframe-CtXhLetY.js";import{D as c}from"./Dropdown-D7OO9hIV.js";import{M as g}from"./SearchField-DGLH3IXX.js";import{S as x}from"./ChevronUpDown-dweat57-.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./ItemMedia-BiJdsWyj.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./ChevronRight-S5R-64jg.js";import"./FieldBase-CnqvqYs3.js";import"./Typography-BeyzbKvD.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./useMenu-BNTP8R_q.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=o(({title:t="Meny",placement:r})=>{const[a,n]=u.useState(!0),i=o(()=>{n(m=>!m)},"onToggle"),l=o(()=>{n(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:t}),e.jsx(x,{})]}),open:a,onClose:l,placement:r,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
