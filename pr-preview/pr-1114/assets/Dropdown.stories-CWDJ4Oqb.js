import{r as u,j as e}from"./iframe-CEV_bE_y.js";import{B as d}from"./Button-Camg-mBZ.js";import{a as g}from"./SearchField-C9XAkfHX.js";import{D as m}from"./Dropdown--G_NTa0P.js";import{S as w}from"./ChevronUpDown-H9bThSVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./index-CGpVDQnA.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./useId-BHfJgDBc.js";import"./XMark-ByuttVGc.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},Z={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},i=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,children:e.jsx(g,{...x,size:"sm"})})},l=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer",children:e.jsx(g,{...x,size:"sm"})})},c=({title:r="Meny",placement:t})=>{const[n,o]=u.useState(!0),s=()=>{o(a=>!a)},p=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(d,{size:"xs",variant:"primary",onClick:s,children:[e.jsx("span",{children:r}),e.jsx(w,{})]}),open:n,onClose:p,placement:t,variant:"drawer-dropdown",children:e.jsx(g,{...x,size:"sm"})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
        </Button>} open={open} onClose={onClose} placement={placement} variant="drawer-dropdown">
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>;
}`,...c.parameters?.docs?.source}}};const $=["DropdownMenu","DrawerMenu","DrawerOrDropdownMenu"];export{l as DrawerMenu,c as DrawerOrDropdownMenu,i as DropdownMenu,$ as __namedExportsOrder,Z as default};
