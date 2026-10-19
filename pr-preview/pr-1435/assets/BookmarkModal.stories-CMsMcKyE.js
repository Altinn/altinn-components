var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-C_3qWz8U.js";import{B as p}from"./BookmarkModal-TZzFCD2b.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-DErnX0V6.js";import"./ModalBody-BKf16YWY.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonIcon-CkJ7s5gA.js";import"./ButtonLabel-IXPMuGu0.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./QueryLabel-ca-OtExV.js";import"./Plus-DHsDmPUd.js";import"./TextField-Zt09XX06.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
