import{r as c,j as e}from"./iframe-yBEatwQ0.js";import{D as l}from"./Dropdown-Dt86DnuG.js";import{S as u}from"./ChevronUpDown-Bh4SS8Cp.js";import{a as d}from"./SearchField-Dq16b7ar.js";import{B as g}from"./Button-Du_F5DdO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7J_eA84.js";import"./XMark-DRdfunCf.js";import"./useId-DyCIbqyR.js";import"./MagnifyingGlass-SlzD67D9.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./Badge-Bt5kdhhY.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./button-DDduZyu8.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Y={title:"Next/Dropdown",component:l,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(m=>!m)},i=()=>{o(!1)};return e.jsx(l,{trigger:e.jsxs(g,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(u,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
