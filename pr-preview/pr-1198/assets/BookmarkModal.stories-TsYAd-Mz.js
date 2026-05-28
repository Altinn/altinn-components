import{s,p as o}from"./iframe-DrMVe4hJ.js";import{B as e}from"./BookmarkModal-zy-7blk1.js";import{B as i}from"./Button-B40GVZAo.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-C32hC9f4.js";import"./ModalBody-ClYSa-ii.js";import"./Section-BOFb_opG.js";import"./index-B2LUQ97G.js";import"./Flex-Bv-_adYq.js";import"./XMark-BXMpu0Gf.js";import"./useId-CwrI0QJg.js";import"./Icon-CK8FcAiF.js";import"./Skeleton-BKl0bJYN.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ButtonGroup-Bxqmt3uG.js";import"./ButtonIcon-DJjLAXS2.js";import"./ButtonLabel-s3GO9UyL.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./QueryLabel-DcDaMQuD.js";import"./Plus-CPTNbqFv.js";import"./TextField-DfaPQYZk.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./Label-QaOAiYFD.js";import"./tooltip-BY1BnveL.js";import"./Input-kqR7j7M6.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
