import{aa as m,a7 as o,c as l}from"./iframe-DdvxY_xq.js";import{B as r}from"./BookmarkModal-BOo0minT.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CwLHclOx.js";import"./ModalBody-DsO_o22C.js";import"./Section-lr4hansN.js";import"./Flex-Ban15jaQ.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./ButtonGroup-D_joR3q8.js";import"./ButtonIcon-BH7NDyQX.js";import"./ButtonLabel-kMxmKDlJ.js";import"./MagnifyingGlass-BNJradcO.js";import"./QueryLabel-Sze88Gf_.js";import"./Plus-C9Ly1iUu.js";import"./TextField-Bv_39GkJ.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
