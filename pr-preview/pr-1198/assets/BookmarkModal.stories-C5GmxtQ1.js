import{r as s,j as o}from"./iframe-CbC-fLaY.js";import{B as e}from"./BookmarkModal-CTivfUc0.js";import{B as i}from"./Button-B0m1rUs2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CMK7iPDJ.js";import"./ModalBody-Ce5L1hlw.js";import"./Section-DypEBfCX.js";import"./index-Ds9VDGIC.js";import"./Flex-DahTG4Th.js";import"./XMark-DvUzU3_h.js";import"./useId-C2JQsT24.js";import"./Icon-DW3Nd0-m.js";import"./Skeleton-D8kEQByH.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ButtonGroup-BE0BnYMw.js";import"./ButtonIcon-DWUAaYBn.js";import"./ButtonLabel-D9GeETuC.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./QueryLabel-Cz6UbTUf.js";import"./Plus-BGo0JvDh.js";import"./TextField-hBfv-7w0.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./Label-DN-jQPwh.js";import"./tooltip-BtbQ4KG6.js";import"./Input-BNbo7Vjn.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
