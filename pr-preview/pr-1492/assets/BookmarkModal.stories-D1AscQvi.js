var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-ucBQ5HcJ.js";import{B as p}from"./BookmarkModal-D1YTCZi0.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BSAlKkZB.js";import"./ModalBody-BJrMsUN-.js";import"./Section-BY1hSuM_.js";import"./Flex-obMty-VJ.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ButtonGroup-57G882s-.js";import"./ButtonIcon-DUU9Fits.js";import"./ButtonLabel-DiEo7qm4.js";import"./MagnifyingGlass-asWGm_ME.js";import"./QueryLabel-D9hTlaww.js";import"./Plus-DM17n_Wh.js";import"./TextField-ChL6EJBp.js";import"./FieldBase-BybGrojy.js";import"./Typography-z9HgrCC2.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
