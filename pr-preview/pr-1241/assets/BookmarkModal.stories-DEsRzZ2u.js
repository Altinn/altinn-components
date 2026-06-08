import{aa as m,a7 as o,c as l}from"./iframe-KbHODQgb.js";import{B as r}from"./BookmarkModal-DVPqglO8.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-_8PcUVyb.js";import"./ModalBody-BLUO0OyV.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./ButtonGroup-D1R72gzy.js";import"./ButtonIcon-J3Dvocxh.js";import"./ButtonLabel-S0TUviQT.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./QueryLabel-Dl9509cP.js";import"./Plus-DWfYvBf0.js";import"./TextField-BjErri7K.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
