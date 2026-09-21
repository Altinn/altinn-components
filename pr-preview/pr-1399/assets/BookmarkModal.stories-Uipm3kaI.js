import{aa as m,a7 as o,c as l}from"./iframe-Bjjt_sJ1.js";import{B as r}from"./BookmarkModal-D7Y22Lc2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-dzs029Zb.js";import"./ModalBody-5UKBpkiI.js";import"./Section-DbOZVIjc.js";import"./Flex-GHRWEM3Q.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./ButtonGroup-uHmrofaO.js";import"./ButtonIcon-CkyJNeMs.js";import"./ButtonLabel-BfWuYCD9.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./QueryLabel-C_C9G4Wu.js";import"./Plus-Bfa-1JFY.js";import"./TextField-n_MdoiyB.js";import"./FieldBase-xSixxw66.js";import"./Typography-D6uVUzG3.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./Input-PLxdr44a.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
