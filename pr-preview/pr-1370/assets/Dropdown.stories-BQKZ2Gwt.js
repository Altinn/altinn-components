import{aa as c,a7 as e,c as u}from"./iframe-DJnynaCo.js";import{D as m}from"./Dropdown-DqJi5yfL.js";import{M as d}from"./SearchField-DQ5LjUme.js";import{S as g}from"./ChevronUpDown-C25m6wF8.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-D5ryHey3.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./useHighlightedText-CYNOolzk.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./Heading-DlyjjAZZ.js";import"./ItemControls-CHuQfTIH.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ChevronRight-C7aaNXCF.js";import"./InformationSquare-Bwpxsw1g.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
