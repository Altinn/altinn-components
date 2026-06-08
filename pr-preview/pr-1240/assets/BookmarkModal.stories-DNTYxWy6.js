import{aa as m,a7 as o,c as l}from"./iframe-B0WoJH5H.js";import{B as r}from"./BookmarkModal-B7HnsgCr.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DtxkL7rE.js";import"./ModalBody-B-In6huT.js";import"./Section-BK9NUwy5.js";import"./Flex-DKCofw-s.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./ButtonGroup-DflqcQYY.js";import"./ButtonIcon-CONSvMyE.js";import"./ButtonLabel-DlvTy_Eu.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./QueryLabel-CxmOVo7Q.js";import"./Plus-teIaH_CW.js";import"./TextField-Di7KSSZ3.js";import"./FieldBase-HmzGYXkl.js";import"./Typography-BsE1w5gb.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
