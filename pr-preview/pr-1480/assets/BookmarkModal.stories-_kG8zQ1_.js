var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-SD2JkkBx.js";import{B as p}from"./BookmarkModal-DtQO4xk3.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-DCZUEALN.js";import"./ModalBody-CBU8Rivy.js";import"./Section-CUNFbhwF.js";import"./Flex-BqyCauEo.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./ButtonGroup-BGhoB7En.js";import"./ButtonLabel-C9VAwr01.js";import"./MagnifyingGlass-99de9OEC.js";import"./QueryLabel-RT7WXA3k.js";import"./Plus-6xBOzmi7.js";import"./TextField-D3MGU2wE.js";import"./FieldBase-BELwbvmB.js";import"./Typography-DYbohGA0.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";const K={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),P=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,P as __namedExportsOrder,K as default};
