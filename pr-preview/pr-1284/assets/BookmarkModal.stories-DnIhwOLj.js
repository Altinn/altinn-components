import{aa as m,a7 as o,c as l}from"./iframe-C7E9hFuS.js";import{B as r}from"./BookmarkModal-Bc-MuT11.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-j4C-0Lav.js";import"./ModalBody-DhpjA3GN.js";import"./Section-0LkdBczO.js";import"./Flex-DW6TlYd6.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Heading-BjzdT1Qv.js";import"./useHighlightedText-BVZd64N7.js";import"./ButtonGroup-CAvVorAa.js";import"./ButtonIcon-tBnnQk-x.js";import"./ButtonLabel-BhxdBqOX.js";import"./MagnifyingGlass-K55ud6sH.js";import"./QueryLabel-Aobr193k.js";import"./Plus-oNsn4BMp.js";import"./TextField-DjMHb-qS.js";import"./FieldBase-C9YC6jMS.js";import"./Typography-BHaJGqRT.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
