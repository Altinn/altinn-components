import{aa as m,a7 as o,c as l}from"./iframe-C7-WWuUz.js";import{B as r}from"./BookmarkModal-CmPDLf8p.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CguPlHuS.js";import"./ModalBody-fYRi36Hl.js";import"./Section-D_PXiQbH.js";import"./Flex-C-tyhriT.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./ButtonGroup-Bf7xvvo6.js";import"./ButtonIcon-BsmUmo_Y.js";import"./ButtonLabel-CdWukQKX.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./QueryLabel-DcDKTr7k.js";import"./Plus-0EP1hD2t.js";import"./TextField-D9UMCTaw.js";import"./FieldBase-V8CxIyK2.js";import"./Typography-BeOUX7s0.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
