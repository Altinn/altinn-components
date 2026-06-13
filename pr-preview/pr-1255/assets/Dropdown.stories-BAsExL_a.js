import{aa as c,a7 as e,c as u}from"./iframe-CTaNoWWa.js";import{D as m}from"./Dropdown-CgaJWkpX.js";import{M as d}from"./SearchField-ybvTeITK.js";import{S as g}from"./ChevronUpDown-Cks1CcB0.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DGspW_mh.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./useHighlightedText-B1ZF3HFO.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";import"./useMenu-CpFtChbI.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuListDivider-CkCLDcCQ.js";import"./MenuListHeading-Gc6ll2v1.js";import"./MenuItem-CimdO91p.js";import"./ItemMedia-wY5sofun.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./Heading-C1mUjHlh.js";import"./ItemControls-DMuz6Cbk.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./ChevronRight-CohjqIQG.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},H={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const J=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,J as __namedExportsOrder,H as default};
