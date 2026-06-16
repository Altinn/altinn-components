import{aa as m,a7 as o,c as l}from"./iframe-Cj7V21km.js";import{B as r}from"./BookmarkModal-BTq5OZky.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-C38mM1Zv.js";import"./ModalBody-Bg14fQJl.js";import"./Section-fD1somlY.js";import"./Flex-CMfzrDGq.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonIcon-BJPub_WA.js";import"./ButtonLabel-LAa8UsBL.js";import"./MagnifyingGlass-B8zavmyI.js";import"./QueryLabel-Bp4M4Z81.js";import"./Plus-ubcjdf5p.js";import"./TextField-BJ7wP6V8.js";import"./FieldBase-D_BM9i5X.js";import"./Typography-B3pfG5kD.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
