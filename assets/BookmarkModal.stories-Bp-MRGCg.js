import{aa as m,a7 as o,c as l}from"./iframe-BbHZTISi.js";import{B as r}from"./BookmarkModal-BnQ86TzB.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-aoCm58w5.js";import"./ModalBody-Bf_4VZq1.js";import"./Section-DsI3lDGv.js";import"./Flex-RSxiLUVh.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./Heading-Bg_B2C5V.js";import"./useHighlightedText-BqQK_DfD.js";import"./ButtonGroup-CDktoaSg.js";import"./ButtonIcon-CmTTKJCC.js";import"./ButtonLabel-smgeyMYQ.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./QueryLabel-Cr7h1Z-C.js";import"./Plus-BcB75ChO.js";import"./TextField-DSzrwVXU.js";import"./FieldBase-Di9G28SV.js";import"./Typography-Ckv3AOJx.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
