import{r as s,j as o}from"./iframe-BM6RZuQM.js";import{B as e}from"./BookmarkModal-DCuqFoNk.js";import{B as i}from"./Button-DhtPu9_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D-ZvKL37.js";import"./ModalBody-tg8E7uYI.js";import"./Section-h9TGEdkh.js";import"./index-DAnedVDn.js";import"./Flex-DCHL4VAz.js";import"./XMark-EbOSJv8a.js";import"./useId-BYt_OYJh.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonIcon-Cvxr_Dcd.js";import"./ButtonLabel-DbDYSY1l.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./QueryLabel-DVRzqAqw.js";import"./Plus-DESzxFez.js";import"./TextField-D940yGFY.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./Label-C7IFl0uM.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
