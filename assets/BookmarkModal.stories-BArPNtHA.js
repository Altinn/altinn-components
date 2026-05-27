import{s,p as o}from"./iframe-WHERbRNQ.js";import{B as e}from"./BookmarkModal-BuYS7Eos.js";import{B as i}from"./Button-DkTjWAj1.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Cgo4pod6.js";import"./ModalBody-7W0CxkDb.js";import"./Section-D-Yeh31t.js";import"./index-CPQpJFkN.js";import"./Flex-DJNl6q2s.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./Icon-jpLauUO9.js";import"./Skeleton-rNcUZaAx.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Heading-POmwd9W2.js";import"./useHighlightedText-CCsQk8zm.js";import"./ButtonGroup-BZN8TM8O.js";import"./ButtonIcon-Dpjnx9Q5.js";import"./ButtonLabel-DaknUBOb.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./QueryLabel-ExsbCysj.js";import"./Plus-CNY0bkRi.js";import"./TextField-XgPuuW3K.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./Label-DoBAei1C.js";import"./tooltip-C7TGaz5I.js";import"./Input-D2AEap14.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
