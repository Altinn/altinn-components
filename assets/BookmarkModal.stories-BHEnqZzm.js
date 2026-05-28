import{s,p as o}from"./iframe-43_RSSTf.js";import{B as e}from"./BookmarkModal-CF3ak4nd.js";import{B as i}from"./Button-B83AdZGF.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-pzz_m3jh.js";import"./ModalBody-RXLH-EOA.js";import"./Section-i7Bzbjq_.js";import"./index-D9XEmR3s.js";import"./Flex-CbLPS6D2.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";import"./MagnifyingGlass-Bf1420VU.js";import"./QueryLabel-CTYDh99p.js";import"./Plus-BQyf1Gxm.js";import"./TextField-C2NHcdr5.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./Label-DtAXMx4b.js";import"./tooltip-CaRi0lSN.js";import"./Input-B-eeYerN.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
