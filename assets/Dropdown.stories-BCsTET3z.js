import{aa as c,a7 as e,c as u}from"./iframe-DWxW88Wb.js";import{D as m}from"./Dropdown-CCIsf4ws.js";import{M as d}from"./SearchField-DiX0tG9c.js";import{S as g}from"./ChevronUpDown-BVSifUrF.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DeszhIH4.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./useHighlightedText-Kme-_nwy.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./useMenu-DXA38xVt.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./Heading-Dg7_b6ZQ.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronRight-CaZE672G.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
