import{aa as m,a7 as o,c as l}from"./iframe-DymAqe7-.js";import{B as r}from"./BookmarkModal-ClagqMTx.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BR0dL4iR.js";import"./ModalBody-B4NkrjfW.js";import"./Section-VcJzw9XS.js";import"./Flex-SVKdN4dv.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Heading-D0_eZ5cX.js";import"./useHighlightedText-CHgJbocK.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./ButtonIcon-X8AJhbmq.js";import"./ButtonLabel-CUwAx-eR.js";import"./MagnifyingGlass-DYyWgrew.js";import"./QueryLabel-COzfai_T.js";import"./Plus-k9X7JJ5T.js";import"./TextField-C7QREjp_.js";import"./FieldBase-CV5Nsw3m.js";import"./Typography-CpmuPi_2.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
