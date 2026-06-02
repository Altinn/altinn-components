import{aa as m,a7 as o,c as l}from"./iframe-Ci8DJ-6R.js";import{B as r}from"./BookmarkModal-DFod5_df.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DXXu6Uto.js";import"./ModalBody-r5nbGSQx.js";import"./Section-C3vz0YaC.js";import"./Flex-UXtVwom-.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./ButtonGroup-BYverAEg.js";import"./ButtonIcon-DbIq7rLn.js";import"./ButtonLabel-eTtLvekB.js";import"./MagnifyingGlass--VnpSKzI.js";import"./QueryLabel-Dg-wTRTc.js";import"./Plus-5W3QRt0z.js";import"./TextField-Cb5Akx0Q.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
