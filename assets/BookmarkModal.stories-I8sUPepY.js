import{aa as m,a7 as o,c as l}from"./iframe-CfUrJ-sW.js";import{B as r}from"./BookmarkModal-D0khMjVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-C0lARV3s.js";import"./ModalBody-BTkCYeJ8.js";import"./Section-CnfuXcY3.js";import"./Flex-DpzfZDgd.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./ButtonGroup-9eoCQEvr.js";import"./ButtonIcon-CzpTDJ2F.js";import"./ButtonLabel-ChaENXy3.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./QueryLabel-BkWZ3vRf.js";import"./Plus-hdfH71QK.js";import"./TextField-0bvajYTU.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
