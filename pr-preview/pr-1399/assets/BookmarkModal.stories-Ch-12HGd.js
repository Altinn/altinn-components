import{aa as m,a7 as o,c as l}from"./iframe-DJfn40-D.js";import{B as r}from"./BookmarkModal-Cc13AUEB.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D-UeQJQp.js";import"./ModalBody-byCqzvmH.js";import"./Section-DRGrLW1j.js";import"./Flex-BuCXAFdl.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./ButtonGroup-HFpGrSBK.js";import"./ButtonIcon-C08Tz3FQ.js";import"./ButtonLabel-D0AuKm4B.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./QueryLabel-Dkv8HuzX.js";import"./Plus-CBmVVX8g.js";import"./TextField-Cn0Doatu.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
