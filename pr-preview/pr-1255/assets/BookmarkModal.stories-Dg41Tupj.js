import{aa as m,a7 as o,c as l}from"./iframe-B2qSCuzl.js";import{B as r}from"./BookmarkModal-Bno0XrCB.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BLit_PVt.js";import"./ModalBody-DivKqOfu.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ButtonGroup-DPqV5ihn.js";import"./ButtonIcon-BiMVSz7h.js";import"./ButtonLabel-YAaoCcyd.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./QueryLabel-Ci40n7fV.js";import"./Plus-C423HqNe.js";import"./TextField-DTc4Gwi9.js";import"./FieldBase-LsrXuCdT.js";import"./Typography-CidHk-ga.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
