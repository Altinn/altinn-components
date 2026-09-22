import{aa as m,a7 as o,c as l}from"./iframe-Ca4u80-y.js";import{B as r}from"./BookmarkModal-sda4Njj2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CiFfnuDg.js";import"./ModalBody-BlWXQol1.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonIcon-CPwlrksd.js";import"./ButtonLabel-DymAo8y_.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./QueryLabel-beq-TejI.js";import"./Plus-Oh3Xr98D.js";import"./TextField-Bew3xIV0.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
