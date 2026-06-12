import{aa as m,a7 as o,c as l}from"./iframe-DWR_BPge.js";import{B as r}from"./BookmarkModal-j2u8UuIC.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-B9paxYpJ.js";import"./ModalBody-TFV96CG9.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";import"./MagnifyingGlass-G_PIqG58.js";import"./QueryLabel-BwIEHFu9.js";import"./Plus-F3v00gKT.js";import"./TextField-CnsffK4d.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
