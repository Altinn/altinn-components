import{aa as m,a7 as o,c as l}from"./iframe-Dm8TtyEm.js";import{B as r}from"./BookmarkModal-CRbI8ks6.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-024qYl2I.js";import"./ModalBody-BPhOhrPb.js";import"./Section-BrWI6aLb.js";import"./Flex-Cpk93h3c.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonIcon-DDq-LKvW.js";import"./ButtonLabel-BVYKz0oP.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./QueryLabel-D-jYG4Lg.js";import"./Plus-C1QsrUU0.js";import"./TextField-Bh_yj_hG.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
