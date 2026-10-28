var w=Object.defineProperty;var n=(o,t)=>w(o,"name",{value:t,configurable:!0});import{a8 as u,a5 as e,b as d}from"./iframe-BfD7syly.js";import{D as c}from"./Dropdown-BRxpGVP6.js";import{M as g}from"./SearchField-CWWZLGm9.js";import{S as x}from"./ChevronUpDown-CjLJ_1zh.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";const v={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},L={title:"Next/Dropdown",component:c,tags:["autodocs"],parameters:{},args:{placement:"left"}},s=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,children:e.jsx(g,{...v,size:"sm"})})},"DropdownMenu"),p=n(({title:o="Meny",placement:t})=>{const[a,r]=u.useState(!0),i=n(()=>{r(m=>!m)},"onToggle"),l=n(()=>{r(!1)},"onClose");return e.jsx(c,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:i,children:[e.jsx("span",{children:o}),e.jsx(x,{})]}),open:a,onClose:l,placement:t,variant:"drawer",children:e.jsx(g,{...v,size:"sm"})})},"DrawerMenu"),Q=["DropdownMenu","DrawerMenu"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};export{p as DrawerMenu,s as DropdownMenu,Q as __namedExportsOrder,L as default};
