import{aa as m,a7 as o,c as l}from"./iframe-D3QbR5Le.js";import{B as r}from"./BookmarkModal-9-v_d_-2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CeyZSZ--.js";import"./ModalBody-BwpzmVNb.js";import"./Section-C8MEyA5r.js";import"./Flex-Dql3tqb8.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Heading-D807jdih.js";import"./useHighlightedText-Cs6VCP7b.js";import"./ButtonGroup-BYb3YlMN.js";import"./ButtonIcon-Ye1m4QhY.js";import"./ButtonLabel-ChXqurd4.js";import"./MagnifyingGlass-odaglt7B.js";import"./QueryLabel-CW90pEyQ.js";import"./Plus-CH4rOE0f.js";import"./TextField-BeFFvfBE.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
