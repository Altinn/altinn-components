import{aa as m,a7 as o,c as l}from"./iframe-CSiNS2_t.js";import{B as r}from"./BookmarkModal-DZ7ornNu.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CPFHCYMo.js";import"./ModalBody-DOzVYGFR.js";import"./Section-iGjVnzYd.js";import"./Flex-DavaSday.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonIcon-ZdtxxxtZ.js";import"./ButtonLabel-BCsBDwVV.js";import"./MagnifyingGlass-L16wMwR7.js";import"./QueryLabel-D7Xpm9Cm.js";import"./Plus-BIfsBTTp.js";import"./TextField-DL42MY-m.js";import"./FieldBase-rPqTSW37.js";import"./Typography-tfUHPeKu.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
