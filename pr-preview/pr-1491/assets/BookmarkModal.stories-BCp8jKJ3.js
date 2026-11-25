var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-Df5nkPs8.js";import{B as p}from"./BookmarkModal-SoFf1aUw.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-TGLT5mRb.js";import"./ModalBody-ESjZKsjK.js";import"./Section-CNSG608H.js";import"./Flex-CYtO0dFj.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonIcon-yAUUau4A.js";import"./ButtonLabel-DPkO8s9u.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./QueryLabel-CgkP5LJd.js";import"./Plus-BaDdjZ6L.js";import"./TextField-DGYwlIlO.js";import"./FieldBase-C4nTzDS1.js";import"./Typography-W78b6WhV.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
