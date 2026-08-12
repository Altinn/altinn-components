import{aa as m,a7 as o,c as l}from"./iframe-CeD8DZF_.js";import{B as r}from"./BookmarkModal-BgwJx50z.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DO2hkuYe.js";import"./ModalBody-B4hCRN8z.js";import"./Section-18Uf7Mat.js";import"./Flex-BOkBPJQr.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./ButtonGroup-C3-Lq824.js";import"./ButtonIcon-C0Csvo29.js";import"./ButtonLabel-BzOdEbMB.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./QueryLabel-DNTlg9WW.js";import"./Plus-StvQ1Urq.js";import"./TextField-WBCoU1O_.js";import"./FieldBase-BbgmrWIh.js";import"./Typography-D10BEJyK.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
