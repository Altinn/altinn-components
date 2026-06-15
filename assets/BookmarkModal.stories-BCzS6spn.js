import{aa as m,a7 as o,c as l}from"./iframe-B7zm1HIO.js";import{B as r}from"./BookmarkModal-DrVb1rQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D2UTX3Lg.js";import"./ModalBody-BUYK0n2i.js";import"./Section-DkuWWe6d.js";import"./Flex-N2sBTmCS.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./ButtonGroup-DEQPq0-6.js";import"./ButtonIcon-HLjqR8Bo.js";import"./ButtonLabel-D1cCa6No.js";import"./MagnifyingGlass-CVQmLynz.js";import"./QueryLabel-Csf2n3As.js";import"./Plus-FoCTTomm.js";import"./TextField-CsiKyP5a.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
