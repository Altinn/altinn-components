import{aa as m,a7 as o,c as l}from"./iframe-C-THn91T.js";import{B as r}from"./BookmarkModal-ByBxOHRU.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-_T4heT05.js";import"./ModalBody-CWjR2JlU.js";import"./Section-BoYAWl0A.js";import"./Flex-C1ZLhAqe.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Heading-Bt4tEn1t.js";import"./useHighlightedText-LohBehUX.js";import"./ButtonGroup-CfikcDtR.js";import"./ButtonIcon-NqW4JNJH.js";import"./ButtonLabel-BXCrqDSx.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./QueryLabel-BE2Yv0GN.js";import"./Plus-CP2q7sax.js";import"./TextField-_1OHmAsK.js";import"./FieldBase-3tu8AQku.js";import"./Typography-BHSdNY0l.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
