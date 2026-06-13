import{aa as m,a7 as o,c as l}from"./iframe-CTaNoWWa.js";import{B as r}from"./BookmarkModal-CjBQTn1l.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BQMqrzAH.js";import"./ModalBody-Dfwh0Tur.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ButtonGroup-DcAUocsW.js";import"./ButtonIcon-TLZW9XLN.js";import"./ButtonLabel-5YzgT7kC.js";import"./MagnifyingGlass-DGspW_mh.js";import"./QueryLabel-DCH_638I.js";import"./Plus-B6k-0-JZ.js";import"./TextField-CWdssTLQ.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
