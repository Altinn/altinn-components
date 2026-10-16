var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-ITS-2hJr.js";import{B as p}from"./BookmarkModal-CQt_78Wi.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CxN7IwrT.js";import"./ModalBody-Cqe55Y6K.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ButtonGroup-B79-xqIF.js";import"./ButtonIcon-DIolnyFl.js";import"./ButtonLabel-DKPFiNkA.js";import"./MagnifyingGlass-CFIOBciK.js";import"./QueryLabel-DAaw7gXL.js";import"./Plus-CqSWQ4ND.js";import"./TextField-CtDQb2Ds.js";import"./FieldBase-CQGaRX-e.js";import"./Typography-8PAPF6ji.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
