import{aa as m,a7 as o,c as l}from"./iframe-F_FB4Yxl.js";import{B as r}from"./BookmarkModal-Coa37dbI.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CHbp-6JA.js";import"./ModalBody-uLS_r9P8.js";import"./Section-BgR8r3RU.js";import"./Flex-QNMJxvpD.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./ButtonGroup-BZH662VO.js";import"./ButtonIcon-CeLrnMM_.js";import"./ButtonLabel-ClraFuq1.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./QueryLabel-BcU5nQUh.js";import"./Plus-CvcVl1NJ.js";import"./TextField-Bb9RCNOR.js";import"./FieldBase-DKsxkZ_u.js";import"./Typography-BQdVTYYF.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
