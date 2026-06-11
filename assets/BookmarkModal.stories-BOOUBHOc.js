import{aa as m,a7 as o,c as l}from"./iframe-CvGAoPsc.js";import{B as r}from"./BookmarkModal-CDbHjoea.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D2U2f8HB.js";import"./ModalBody-BEoDIyb7.js";import"./Section-25rkGJ0B.js";import"./Flex-DO5C4y-8.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./ButtonGroup-CN_FlQBy.js";import"./ButtonIcon-Bu8EM3Rn.js";import"./ButtonLabel-CH2OrlmQ.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./QueryLabel-DtGA44qw.js";import"./Plus-gM9Gdbeo.js";import"./TextField-CXoYm8q0.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
