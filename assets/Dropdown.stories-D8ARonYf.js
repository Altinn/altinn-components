import{aa as c,a7 as e,c as u}from"./iframe-RnExGCnN.js";import{D as m}from"./Dropdown-B88VU_C4.js";import{M as d}from"./SearchField-vIwRNxpu.js";import{S as g}from"./ChevronUpDown-D19eKQQj.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./useHighlightedText-wXuVfUlk.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./Heading-Ds8TW_p4.js";import"./ItemControls-g4j5xbWR.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronRight-CN6Km5wu.js";import"./InformationSquare-CRikKN32.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const H=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,H as __namedExportsOrder,G as default};
