import{aa as m,a7 as o,c as l}from"./iframe-BKPYfBaP.js";import{B as r}from"./BookmarkModal-CngUqxSy.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-B7N099VA.js";import"./ModalBody-qGK1jZij.js";import"./Section-DIn3fiOi.js";import"./Flex-Dg9OypdH.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ButtonGroup-CQeTBn3N.js";import"./ButtonIcon-g3sANd5j.js";import"./ButtonLabel-CEapPxhA.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./QueryLabel-3FEY_FdN.js";import"./Plus-3k5Jqwe2.js";import"./TextField-C5wmiUHQ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
