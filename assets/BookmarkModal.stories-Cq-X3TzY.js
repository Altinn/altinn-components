import{aa as m,a7 as o,c as l}from"./iframe-pmb13xcr.js";import{B as r}from"./BookmarkModal-BkmhTfhg.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DDb7WpLZ.js";import"./ModalBody-CU8fQCap.js";import"./Section-0UMzqVbn.js";import"./Flex-Bo48iBpz.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Heading-sU40TroH.js";import"./useHighlightedText-By0gZF-u.js";import"./ButtonGroup-DvNffpdA.js";import"./ButtonIcon-B4tRqIle.js";import"./ButtonLabel-BbcEgvaI.js";import"./MagnifyingGlass-HRL7caCa.js";import"./QueryLabel-CWOOXAht.js";import"./Plus-CpF1S0sT.js";import"./TextField-kVpI9nVo.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
