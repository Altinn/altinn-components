import{s,p as o}from"./iframe-a6n42jIx.js";import{B as e}from"./BookmarkModal-bTqB-833.js";import{B as i}from"./Button-DYhT04-k.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CcO2d848.js";import"./ModalBody-BJnVO0Kt.js";import"./Section-SbJC69tZ.js";import"./index-D2z1-3lt.js";import"./Flex-BTGTFkLF.js";import"./XMark-ENWUN_kz.js";import"./useId-JsUrCC3L.js";import"./Icon-C2KYL6xM.js";import"./Skeleton-BMznOa58.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ButtonGroup-r8c9eAn-.js";import"./ButtonIcon-BSWg8HV7.js";import"./ButtonLabel-00C_O_zy.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./QueryLabel-CSxDB6uf.js";import"./Plus-DWNwY5kK.js";import"./TextField-BZ7hsKcf.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./Label-CP4RT8OS.js";import"./tooltip-D8RdZxwd.js";import"./Input-BUxVKC9v.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
