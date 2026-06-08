import{aa as m,a7 as o,c as l}from"./iframe-BkdCVhNa.js";import{B as r}from"./BookmarkModal-DXQ7UvPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DpPyb3um.js";import"./ModalBody-DLY4BfUv.js";import"./Section-CCbnuMor.js";import"./Flex-0kNayUnl.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonIcon-BF0TueQT.js";import"./ButtonLabel-Bhmgk5ut.js";import"./MagnifyingGlass-Dy-txje3.js";import"./QueryLabel-CnM4ONJq.js";import"./Plus-1oHAiQB4.js";import"./TextField-B36IzlVh.js";import"./FieldBase-DIosJ8GZ.js";import"./Typography-BbYlnfM1.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
