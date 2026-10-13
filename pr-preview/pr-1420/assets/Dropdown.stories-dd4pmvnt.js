import{aa as c,a7 as e,c as u}from"./iframe-BidFzEoe.js";import{D as m}from"./Dropdown-BZ5Wwg_Y.js";import{M as d}from"./SearchField-CPTH-dMf.js";import{S as g}from"./ChevronUpDown-g9jyYsW3.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./useHighlightedText-B2dzt3_l.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./Heading-XBMlN0kz.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronRight-B3flyXKQ.js";import"./InformationSquare-B1R5HfkF.js";const x={label:"Velg status",groups:{1:{title:"Velg status"}},items:[{id:"1",groupId:"1",role:"checkbox",name:"unread",value:"true",title:"Ulest"},{id:"2",groupId:"2",role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"},{id:"3",groupId:"2",role:"checkbox",name:"status",value:"awaiting",title:"Avventer"},{id:"4",groupId:"2",role:"checkbox",name:"status",value:"in-progress",title:"Under arbeid"},{id:"5",groupId:"2",role:"checkbox",name:"status",value:"completed",title:"Avsluttet"},{id:"6",groupId:"3",role:"checkbox",name:"status",value:"undefined",title:"Ingen status"}]},G={title:"Next/Dropdown",component:m,tags:["autodocs"],parameters:{},args:{placement:"left"}},t=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,children:e.jsx(d,{...x,size:"sm"})})},r=({title:n="Meny",placement:s})=>{const[p,o]=c.useState(!0),a=()=>{o(l=>!l)},i=()=>{o(!1)};return e.jsx(m,{trigger:e.jsxs(u,{size:"xs",variant:"primary",onClick:a,children:[e.jsx("span",{children:n}),e.jsx(g,{})]}),open:p,onClose:i,placement:s,variant:"drawer",children:e.jsx(d,{...x,size:"sm"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
