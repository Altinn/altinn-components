import{aa as m,a7 as o,c as l}from"./iframe-CGVyzYP6.js";import{B as r}from"./BookmarkModal-BESsGbit.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D6JNoI1O.js";import"./ModalBody-BShtfl0N.js";import"./Section-Dto-LHOR.js";import"./Flex-Ba3off4t.js";import"./Avatar-DDHY9yxs.js";import"./AvatarGroup-B_UwXOMR.js";import"./Heading-EfRG8byd.js";import"./useHighlightedText-Bh9EAdhA.js";import"./ButtonGroup-C56yvq46.js";import"./ButtonIcon-DxwlIUls.js";import"./ButtonLabel-Cv6t8WFf.js";import"./MagnifyingGlass-Vm5pwk0c.js";import"./QueryLabel-DSrmKpGM.js";import"./Plus-BK1pztAq.js";import"./TextField-TmUNtNfi.js";import"./FieldBase-CPq342qa.js";import"./Typography-CpGYIokR.js";import"./Field-D0ZvmoXg.js";import"./Label-Cy3PFObt.js";import"./Input-ChwQfPxo.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
