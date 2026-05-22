import{r as s,j as o}from"./iframe-C6Awlou2.js";import{B as e}from"./BookmarkModal-BEHB3cKk.js";import{B as i}from"./Button-xDUaTd0f.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D4o6h_BN.js";import"./ModalBody-B_QH7FJE.js";import"./Section-Bo2XNiOH.js";import"./index-DlBZqmFk.js";import"./Flex-CdwLgxBs.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ButtonGroup-wXquxLDR.js";import"./ButtonIcon-CsIFcTMm.js";import"./ButtonLabel-DV3CS5lX.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./QueryLabel-RNavFCKB.js";import"./Plus-CQfWxjRv.js";import"./TextField-Cy0Mg42Y.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./Label-C48-SpFn.js";import"./tooltip-wBWP-9p3.js";import"./Input-DYyIZxUH.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
