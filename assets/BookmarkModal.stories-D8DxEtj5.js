import{aa as m,a7 as o,c as l}from"./iframe-CAjSv_nS.js";import{B as r}from"./BookmarkModal-BrF6Aj0w.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-r0MnGfEQ.js";import"./ModalBody-BEocNTvo.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ButtonGroup-CHaM1dTc.js";import"./ButtonIcon-BmNdvyqy.js";import"./ButtonLabel-BEVL1UP8.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./QueryLabel-DGaNo9Mv.js";import"./Plus-BAe7a_fr.js";import"./TextField-sSdKcljq.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
