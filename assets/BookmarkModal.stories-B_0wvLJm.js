import{aa as m,a7 as o,c as l}from"./iframe-Dmn_-H53.js";import{B as r}from"./BookmarkModal-BaR_TEvl.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DJ1z037I.js";import"./ModalBody-CxAozs8t.js";import"./Section-B0K1LM20.js";import"./Flex-Dt5U6DKy.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./ButtonGroup-CPlQwmGd.js";import"./ButtonIcon-BdkdVYvg.js";import"./ButtonLabel-wmKbEjn1.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./QueryLabel-CUupVATa.js";import"./Plus-CqXOqTKR.js";import"./TextField-wUp0w9YU.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
