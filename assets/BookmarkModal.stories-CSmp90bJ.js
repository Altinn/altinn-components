import{aa as m,a7 as o,c as l}from"./iframe-IRVPXNFV.js";import{B as r}from"./BookmarkModal-DG1e4Cun.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DHpAPTlm.js";import"./ModalBody-BicCMsex.js";import"./Section-D1bZZmzH.js";import"./Flex-oS8OWrEi.js";import"./Avatar-drWAMmf1.js";import"./AvatarGroup-Caex7Tu5.js";import"./Heading-DjAzNFDQ.js";import"./useHighlightedText-CG_8__up.js";import"./ButtonGroup-BVNMP4FP.js";import"./ButtonIcon-6bTpUQZK.js";import"./ButtonLabel-C7Jt6L6t.js";import"./MagnifyingGlass-C_Mjm1Zn.js";import"./QueryLabel-BugM0fgX.js";import"./Plus-0ZWJqdTS.js";import"./TextField-BqIbEMLW.js";import"./FieldBase-DMT9IhQO.js";import"./Typography-B61DVKU1.js";import"./Field-DlQFxQyh.js";import"./Label-Di1y72qz.js";import"./Input-CgzWa5OM.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
