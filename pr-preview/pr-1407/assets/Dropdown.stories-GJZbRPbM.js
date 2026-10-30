var w=Object.defineProperty;var n=(o,t)=>w(o,"name",{value:t,configurable:!0});import{a8 as u,a5 as e,b as d}from"./iframe-k-5ppgch.js";import{D as c}from"./Dropdown-CPtynmaA.js";import{M as g}from"./SearchField-BRPq9oj8.js";import{S as x}from"./ChevronUpDown--im5d_9E.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Q={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu"),W=["DropdownMenu","DrawerMenu"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};export{p as DrawerMenu,s as DropdownMenu,W as __namedExportsOrder,Q as default};
