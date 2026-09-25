import{aa as m,a7 as o,c as l}from"./iframe-vkxhbe5D.js";import{B as r}from"./BookmarkModal-DnLWOxNx.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DangJQGU.js";import"./ModalBody-DMnwwAr3.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ButtonGroup-Bd7c8rmX.js";import"./ButtonIcon-BjmAFG2x.js";import"./ButtonLabel-CaIsvuRE.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./QueryLabel-B8IFt_Dj.js";import"./Plus-DvLwQ2c5.js";import"./TextField-C_iOCERW.js";import"./FieldBase-BW43HWjL.js";import"./Typography-CiocPTHR.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
