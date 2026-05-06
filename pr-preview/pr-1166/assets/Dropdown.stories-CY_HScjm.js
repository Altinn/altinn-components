import{r as c,j as e}from"./iframe-JDDu8qct.js";import{D as l}from"./Dropdown-C4SP0e_D.js";import{S as u}from"./ChevronUpDown-BaZBG0n4.js";import{a as d}from"./SearchField-CPeUZoGo.js";import{B as g}from"./Button-DJdKIqrT.js";import"./preload-helper-PPVm8Dsz.js";import"./index--LOES4hQ.js";import"./XMark-YkWOq4QK.js";import"./useId-BWG34Gxg.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./FieldBase-D3HPIoAl.js";import"./Typography-yaBddsX3.js";import"./useHighlightedText-CEk7sGm4.js";import"./Skeleton-CG77vT0k.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./Avatar-C90IY9ut.js";import"./AvatarGroup-iM9HxeRB.js";import"./Icon-DIHT6axv.js";import"./Checkmark-D1rpd2hz.js";import"./Heading-DTbUzRnV.js";import"./ItemControls-_7JFqe2W.js";import"./ChevronRight-CAXd-oaR.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./button-xt_-egYh.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},$={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const ee=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,ee as __namedExportsOrder,$ as default};
