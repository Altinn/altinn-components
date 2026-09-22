import{aa as m,a7 as o,c as l}from"./iframe-B1m5YS-z.js";import{B as r}from"./BookmarkModal-CnDgxm59.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BcCqtHIO.js";import"./ModalBody-ByLHH82k.js";import"./Section-BpRK9CgH.js";import"./Flex-ChmU5Mgr.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Heading-Bdg559v2.js";import"./useHighlightedText-BJ6Snog5.js";import"./ButtonGroup-K8bkOi3q.js";import"./ButtonIcon-u2Ofnhum.js";import"./ButtonLabel-B0ghZbJS.js";import"./MagnifyingGlass-DOC044bk.js";import"./QueryLabel-BfRQ1dHJ.js";import"./Plus-yML150nC.js";import"./TextField-DUJ3VIRd.js";import"./FieldBase-DF02WocK.js";import"./Typography-D-hgdwYf.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
