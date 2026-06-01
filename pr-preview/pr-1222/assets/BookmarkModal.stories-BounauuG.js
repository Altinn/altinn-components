import{aa as m,a7 as o,c as l}from"./iframe-DzC97elN.js";import{B as r}from"./BookmarkModal-CnihOMlS.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-B-gWkeFY.js";import"./ModalBody-CsfaIftq.js";import"./Section-B7XqZvfR.js";import"./Flex-CXtmXiNa.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./ButtonGroup-BbJZX9rk.js";import"./ButtonIcon-QQ_ZbP2-.js";import"./ButtonLabel-D7hHDrz9.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./QueryLabel-Cfhsi1iU.js";import"./Plus-CcwlUJc-.js";import"./TextField-PmhDe6m1.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
