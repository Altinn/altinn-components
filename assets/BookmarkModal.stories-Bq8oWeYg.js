import{aa as m,a7 as o,c as l}from"./iframe-CId_qj2z.js";import{B as r}from"./BookmarkModal-D-NrZIkJ.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Ypx-VLJc.js";import"./ModalBody-Dz1aFIAA.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ButtonGroup-BzI-lfVi.js";import"./ButtonIcon-6rERrVIq.js";import"./ButtonLabel-CxcuksMv.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./QueryLabel-CPRldmCT.js";import"./Plus-D70awSlJ.js";import"./TextField-QbJymoSS.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
