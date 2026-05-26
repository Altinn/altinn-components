import{r as s,j as o}from"./iframe-CdkbiINU.js";import{B as e}from"./BookmarkModal-Dtpdl9ww.js";import{B as i}from"./Button-DbqBa2Ra.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-p1UGJMFY.js";import"./ModalBody-B1FGT2pR.js";import"./Section-CxpgG4VY.js";import"./index-ClUlC5r_.js";import"./Flex-B60SO79o.js";import"./XMark-CXTea0I2.js";import"./useId-BBNwfwR-.js";import"./Icon-Cn1mWE7M.js";import"./Skeleton-DNrLKFK9.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonIcon-CyqeVLbn.js";import"./ButtonLabel-BTmVkbIz.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./QueryLabel-CY4lm9Jd.js";import"./Plus-BlZ2V0ro.js";import"./TextField-B9cNHav0.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./Label-DOiiUdXJ.js";import"./tooltip-ClrKYCC2.js";import"./Input-CXgAq3E9.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
