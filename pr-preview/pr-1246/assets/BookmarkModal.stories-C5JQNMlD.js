import{aa as m,a7 as o,c as l}from"./iframe-D6Pw3lmv.js";import{B as r}from"./BookmarkModal-BHX9BlfV.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DtZGdoZV.js";import"./ModalBody-eofliHBo.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./ButtonGroup-BukNZ9_Z.js";import"./ButtonIcon-BZRYAWT7.js";import"./ButtonLabel-Byk5sCAh.js";import"./MagnifyingGlass-xEXh01wv.js";import"./QueryLabel-DBYtGOs4.js";import"./Plus-yZ7u7aad.js";import"./TextField-1Y0CJPxo.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
