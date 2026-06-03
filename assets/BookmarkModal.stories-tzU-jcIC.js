import{aa as m,a7 as o,c as l}from"./iframe-DxDA2A5n.js";import{B as r}from"./BookmarkModal-C6EEyfhA.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DloPD4cW.js";import"./ModalBody-D3jXQH23.js";import"./Section-BxDgugwi.js";import"./Flex-CfINokNW.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./ButtonGroup-BwP7xmaH.js";import"./ButtonIcon-qeGPxIpM.js";import"./ButtonLabel-B4aFnIiY.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./QueryLabel-Bj_jripS.js";import"./Plus-BRpGG8-t.js";import"./TextField-DdAaSiak.js";import"./FieldBase-D6edMMqi.js";import"./Typography-BpmyNFuo.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
