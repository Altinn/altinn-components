import{r as c,j as e}from"./iframe-COdTICiz.js";import{D as l}from"./Dropdown-riK9lB0y.js";import{S as u}from"./ChevronUpDown-B9jBdQ1p.js";import{a as d}from"./SearchField-DQWZ98wb.js";import{B as g}from"./Button-Dqoqvefk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eHSiAaoN.js";import"./XMark-CpgXVK2Q.js";import"./useId-lT615UMD.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useHighlightedText-FFYshbql.js";import"./Skeleton-DCT9M7tY.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./Badge-CTG2EWNm.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./button-BvBLLivB.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
