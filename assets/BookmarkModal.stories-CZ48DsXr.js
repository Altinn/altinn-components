import{aa as m,a7 as o,c as l}from"./iframe-Dvni_u8W.js";import{B as r}from"./BookmarkModal-CJiUkK0J.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-C7UnawWN.js";import"./ModalBody-CMihPznN.js";import"./Section-CvMDXfkz.js";import"./Flex-C0xjv22N.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Heading-CzH7HB6a.js";import"./useHighlightedText-CLLTD9Wh.js";import"./ButtonGroup-ChfLiHIR.js";import"./ButtonIcon-DaGhQDc3.js";import"./ButtonLabel-BlQ3B1gR.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./QueryLabel-DG1XE8v8.js";import"./Plus-B_1zWORh.js";import"./TextField-CtJ9zWcQ.js";import"./FieldBase-ChKWoxnf.js";import"./Typography-UWzQw34I.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
