import{aa as m,a7 as o,c as l}from"./iframe-3eub8g81.js";import{B as r}from"./BookmarkModal-CpZGsp46.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DHKl9XyW.js";import"./ModalBody-BLJZdTz1.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./ButtonGroup-D2aDB7np.js";import"./ButtonIcon-CTN-ygEI.js";import"./ButtonLabel-DAR0S7-w.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./QueryLabel-CYu5-yfM.js";import"./Plus-BNfQnDLY.js";import"./TextField-CaFL3_rZ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
