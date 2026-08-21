import{aa as m,a7 as o,c as l}from"./iframe-BRsjK6zm.js";import{B as r}from"./BookmarkModal-DoZRtR9L.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BhAlGfSs.js";import"./ModalBody-Cx-bJ05q.js";import"./Section-DAR_XxTX.js";import"./Flex-CYDzZKtj.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./Heading-tpemMnuB.js";import"./useHighlightedText-P3be0gWv.js";import"./ButtonGroup-DZmKTqxp.js";import"./ButtonIcon-CO4iGeIF.js";import"./ButtonLabel-w8kuoY5Z.js";import"./MagnifyingGlass-Cybsybf0.js";import"./QueryLabel-HjdY1XKB.js";import"./Plus-DpGZy_zu.js";import"./TextField-C6J0EMA9.js";import"./FieldBase-C-kV1fOX.js";import"./Typography-BVRUlHaM.js";import"./Field-COSptDWF.js";import"./Label-DkpDVbDp.js";import"./Input-_uBO5XEg.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
