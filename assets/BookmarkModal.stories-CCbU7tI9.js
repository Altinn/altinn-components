import{aa as m,a7 as o,c as l}from"./iframe-ypmT5Gk0.js";import{B as r}from"./BookmarkModal-wdvUtOkx.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-NpQrKLMe.js";import"./ModalBody--kpGACBM.js";import"./Section-DHk6b8dD.js";import"./Flex-Chd0QM3i.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./ButtonGroup-CRz61zp4.js";import"./ButtonIcon-DpuhnEWK.js";import"./ButtonLabel-CXIu-UcJ.js";import"./MagnifyingGlass-BsJL0696.js";import"./QueryLabel-CTgAISS6.js";import"./Plus-Dbutg6U0.js";import"./TextField-CCO_4OXa.js";import"./FieldBase-BZNWpkh0.js";import"./Typography-D_BM_-lf.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
