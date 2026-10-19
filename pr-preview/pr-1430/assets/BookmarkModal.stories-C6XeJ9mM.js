var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-C7zNVDTT.js";import{B as p}from"./BookmarkModal-0rrddBrG.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BI6AVWDn.js";import"./ModalBody-DHblQtRU.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonIcon-BPuZWt5t.js";import"./ButtonLabel-CpQPvS5S.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./QueryLabel-mdVQ8Qmd.js";import"./Plus-D2iqct3P.js";import"./TextField-DUvaSDR4.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
