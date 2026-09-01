import{aa as m,a7 as o,c as l}from"./iframe-DMrRMxbq.js";import{B as r}from"./BookmarkModal-DP-ZRRnt.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-hbvHbbLI.js";import"./ModalBody-DyvDS6kr.js";import"./Section-R5IQ5vtB.js";import"./Flex-D4xbJs2N.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./ButtonGroup-DGYAXoph.js";import"./ButtonIcon-CVi_n_n2.js";import"./ButtonLabel-DrLm7ODF.js";import"./MagnifyingGlass-DofikZhZ.js";import"./QueryLabel-Cs5R43NE.js";import"./Plus-CNvKeQn4.js";import"./TextField-CvMUKPG7.js";import"./FieldBase-BwVJ7Sfq.js";import"./Typography-z164oB1T.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
