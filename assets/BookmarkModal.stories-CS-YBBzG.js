import{r as s,j as o}from"./iframe-C32LkOFR.js";import{B as e}from"./BookmarkModal-D_wmNmfk.js";import{B as i}from"./Button-DJyTPLgL.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BZYvkT5f.js";import"./ModalBody-Dqmc2GiO.js";import"./Section-BW54BVJv.js";import"./index-B41-Gq6i.js";import"./Flex-BUJ7sT5C.js";import"./XMark-CJ_7TJfx.js";import"./useId-C6VS968l.js";import"./Icon-ClcJ2Ugl.js";import"./Skeleton-BFp1Ns5z.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./ButtonGroup-C2Onw-9a.js";import"./ButtonIcon-C8Th3GXI.js";import"./ButtonLabel-zcuLnIEs.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./QueryLabel-qSZLfQuY.js";import"./Plus-BuKKYKtN.js";import"./TextField-9LtiQjkC.js";import"./FieldBase-C4PiPQJY.js";import"./Typography-BtAt1mkJ.js";import"./Label--g4FWuur.js";import"./tooltip-C1z0ba6x.js";import"./Input-944JhKVs.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
