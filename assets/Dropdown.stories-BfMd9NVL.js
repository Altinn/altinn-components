import{s as c,p as e}from"./iframe-Ca1pxjCh.js";import{D as l}from"./Dropdown-mQdbulVM.js";import{M as u}from"./SearchField-CQtbSmEr.js";import{B as d}from"./Button-BUoYLOjU.js";import{S as g}from"./ChevronUpDown-CtvN4UUP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qsemo-NB.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useHighlightedText-B4z3dUTF.js";import"./Skeleton-CjJRr45L.js";import"./Label-Dpkw0Wq9.js";import"./tooltip-DBInG_0S.js";import"./Input-CnEzvrKf.js";import"./useMenu-CVV4ErAO.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronRight-Dx7-HhpA.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},W={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(u,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(u,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const X=["DropdownMenu","DrawerMenu"];export{r as DrawerMenu,t as DropdownMenu,X as __namedExportsOrder,W as default};
