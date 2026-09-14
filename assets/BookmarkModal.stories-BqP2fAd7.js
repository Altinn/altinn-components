import{aa as m,a7 as o,c as l}from"./iframe-BmEoWqRz.js";import{B as r}from"./BookmarkModal-CLsVIfan.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CFu-CX2C.js";import"./ModalBody-CAKbVWLZ.js";import"./Section-BwWH83Jj.js";import"./Flex-CErGdajF.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./Heading-CSNATJ_q.js";import"./useHighlightedText-_GRR2uH-.js";import"./ButtonGroup-Bag4W9on.js";import"./ButtonIcon-Bl6aXluP.js";import"./ButtonLabel-BEXQQUYk.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./QueryLabel-CX7vBwL-.js";import"./Plus-BvGVmtNu.js";import"./TextField-CsO8fcEe.js";import"./FieldBase-T_Ol0Ej6.js";import"./Typography-BVfh1yLf.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./Input-DDCcqldd.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
