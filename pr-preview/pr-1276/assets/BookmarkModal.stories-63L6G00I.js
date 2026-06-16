import{aa as m,a7 as o,c as l}from"./iframe-Dai1liu3.js";import{B as r}from"./BookmarkModal-2ZJ-kB4q.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-ZO1TvAQM.js";import"./ModalBody-DInWXo4g.js";import"./Section-SIo_MtMG.js";import"./Flex-BVj8i7c1.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Heading-DmQEE02y.js";import"./useHighlightedText-DBCcFNzk.js";import"./ButtonGroup-D4ZwjyVx.js";import"./ButtonIcon-MD5DjO6C.js";import"./ButtonLabel-DLfBXBU4.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./QueryLabel-LZ0LjW5Y.js";import"./Plus-DL6goIlD.js";import"./TextField-DVbi06pN.js";import"./FieldBase-CqsxpTvX.js";import"./Typography-DKU5x7uE.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./Input-4lJD8g37.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
