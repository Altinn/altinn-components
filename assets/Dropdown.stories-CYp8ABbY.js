import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./ChevronUpDown-4B2e5dV5.js";import{n as i}from"./SearchField-Bjd6cmAs.js";import{t as a}from"./Button-L6T5IVdq.js";import{t as o}from"./Dropdown-BR3ufNiA.js";var s=e(t(),1),c=n(),l={label:`Velg status`,groups:{1:{title:`Velg status`}},items:[{id:`1`,groupId:`1`,role:`checkbox`,name:`unread`,value:`true`,title:`Ulest`},{id:`2`,groupId:`2`,role:`checkbox`,name:`status`,value:`requires-action`,title:`Krever handling`},{id:`3`,groupId:`2`,role:`checkbox`,name:`status`,value:`awaiting`,title:`Avventer`},{id:`4`,groupId:`2`,role:`checkbox`,name:`status`,value:`in-progress`,title:`Under arbeid`},{id:`5`,groupId:`2`,role:`checkbox`,name:`status`,value:`completed`,title:`Avsluttet`},{id:`6`,groupId:`3`,role:`checkbox`,name:`status`,value:`undefined`,title:`Ingen status`}]},u={title:`Next/Dropdown`,component:o,tags:[`autodocs`],parameters:{},args:{placement:`left`}},d=({title:e=`Meny`,placement:t})=>{let[n,u]=(0,s.useState)(!0);return(0,c.jsx)(o,{trigger:(0,c.jsxs)(a,{size:`xs`,variant:`primary`,onClick:()=>{u(e=>!e)},children:[(0,c.jsx)(`span`,{children:e}),(0,c.jsx)(r,{})]}),open:n,onClose:()=>{u(!1)},placement:t,children:(0,c.jsx)(i,{...l,size:`sm`})})},f=({title:e=`Meny`,placement:t})=>{let[n,u]=(0,s.useState)(!0);return(0,c.jsx)(o,{trigger:(0,c.jsxs)(a,{size:`xs`,variant:`primary`,onClick:()=>{u(e=>!e)},children:[(0,c.jsx)(`span`,{children:e}),(0,c.jsx)(r,{})]}),open:n,onClose:()=>{u(!1)},placement:t,variant:`drawer`,children:(0,c.jsx)(i,{...l,size:`sm`})})},p=({title:e=`Meny`,placement:t})=>{let[n,u]=(0,s.useState)(!0);return(0,c.jsx)(o,{trigger:(0,c.jsxs)(a,{size:`xs`,variant:`primary`,onClick:()=>{u(e=>!e)},children:[(0,c.jsx)(`span`,{children:e}),(0,c.jsx)(r,{})]}),open:n,onClose:()=>{u(!1)},placement:t,variant:`drawer-dropdown`,children:(0,c.jsx)(i,{...l,size:`sm`})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};var m=[`DropdownMenu`,`DrawerMenu`,`DrawerOrDropdownMenu`];export{f as DrawerMenu,p as DrawerOrDropdownMenu,d as DropdownMenu,m as __namedExportsOrder,u as default};