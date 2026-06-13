import{aa as m,a7 as o,c as l}from"./iframe-2h8IP8d3.js";import{B as r}from"./BookmarkModal-CZpfZ893.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-VYSSGws5.js";import"./ModalBody-BO_Js4U5.js";import"./Section-CJtHgorM.js";import"./Flex-CMEhZHn2.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ButtonGroup-Ct8EhDC8.js";import"./ButtonIcon-p_3bwngP.js";import"./ButtonLabel-BONSwqvL.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./QueryLabel-DZmICoZB.js";import"./Plus-VIPYJ0p2.js";import"./TextField-B-jWxqG0.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
