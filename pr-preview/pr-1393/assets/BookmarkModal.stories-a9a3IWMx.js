import{aa as m,a7 as o,c as l}from"./iframe-DXZBp66t.js";import{B as r}from"./BookmarkModal-CLM6n4Gi.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-ClZOd0n6.js";import"./ModalBody-CKaAr9E1.js";import"./Section-CFAnjMLz.js";import"./Flex-D7Hg4_mS.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Heading-Dabq2F6t.js";import"./useHighlightedText-D_TdPqyJ.js";import"./ButtonGroup-B2DxSKEE.js";import"./ButtonIcon-qbUbLnzO.js";import"./ButtonLabel-BlR3YqzS.js";import"./MagnifyingGlass-D2DSD_Zc.js";import"./QueryLabel-Biq9YjMJ.js";import"./Plus-k_IuB4VT.js";import"./TextField-i7J-tqY2.js";import"./FieldBase-Cs4Gpo93.js";import"./Typography-YwBvvLgA.js";import"./Field-awsdGPJZ.js";import"./Label-Byvm_JcV.js";import"./Input--Cg-6oUs.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
