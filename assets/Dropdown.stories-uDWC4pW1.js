import{r as c,j as e}from"./iframe-qDHSBZ_X.js";import{D as l}from"./Dropdown-zJkG990V.js";import{S as u}from"./ChevronUpDown-BxTSf755.js";import{a as d}from"./SearchField-owOVnt34.js";import{B as g}from"./Button-DJMfIG2l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTh2bawh.js";import"./XMark-D8iHP3Cp.js";import"./useId-DLE_nI5l.js";import"./MagnifyingGlass-52kli1F6.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useHighlightedText-D75SWcvd.js";import"./Skeleton-CJ3n2_6V.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./Badge-CmtcZ1do.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./button-CfQ7EAt1.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
