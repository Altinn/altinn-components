import{aa as m,a7 as o,c as l}from"./iframe-azCfu0oF.js";import{B as r}from"./BookmarkModal-DywYUdUu.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DgA94iaR.js";import"./ModalBody-DGD_YXs5.js";import"./Section-cdVnHieS.js";import"./Flex-Dtc9ln1d.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./ButtonGroup-n2_tAFRz.js";import"./ButtonIcon-CwW43bfK.js";import"./ButtonLabel-C-fKFqCV.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./QueryLabel-CWfxX5F4.js";import"./Plus-BRb5Dr-V.js";import"./TextField-i3cTYrXw.js";import"./FieldBase-CGNAcfuA.js";import"./Typography-CWMVViTm.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
