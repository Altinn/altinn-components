import{aa as m,a7 as o,c as l}from"./iframe-C9sF4CIH.js";import{B as r}from"./BookmarkModal-BWxATIUD.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Bifh5L4V.js";import"./ModalBody-CtBEkc_A.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Heading-CN6nglwQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./ButtonGroup-D3X_1KmS.js";import"./ButtonIcon-D2wF1g1O.js";import"./ButtonLabel-CEN1m5GJ.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./QueryLabel-BRnURNuR.js";import"./Plus-t80sr0p5.js";import"./TextField-CXuTUxrC.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
