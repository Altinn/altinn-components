import{s,p as o}from"./iframe-B0raGbVc.js";import{B as e}from"./BookmarkModal-CfRBFcMQ.js";import{B as i}from"./Button-DaZ5Xj9O.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CrxZUlDd.js";import"./ModalBody-Bc7rXxzI.js";import"./Section-DlNTQI-0.js";import"./index-BFPoepm_.js";import"./Flex-DAM9Vgpa.js";import"./XMark-Vu63tlKp.js";import"./useId-DjmMrSjF.js";import"./Icon-CkGS8ofh.js";import"./Skeleton-Bie46BNt.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ButtonGroup-DlKQjFoe.js";import"./ButtonIcon-BDD4AILi.js";import"./ButtonLabel-C6Vo5Tgm.js";import"./MagnifyingGlass-M1myOHdK.js";import"./QueryLabel-DGYI0S1S.js";import"./Plus-Ddu_AJ6f.js";import"./TextField-BfjlbdAL.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./Label-BU6sA0x8.js";import"./tooltip-C563LrpG.js";import"./Input-DWL065bb.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
