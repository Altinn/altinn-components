var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-r-PzxnFG.js";import{B as p}from"./BookmarkModal-DFUXZ16l.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ModalBody-B-L7EXsI.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonLabel-DKmNFHli.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./QueryLabel-DNW7hyld.js";import"./Plus-C3gc2Iai.js";import"./TextField-CvCwRuU3.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";const K={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),P=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,P as __namedExportsOrder,K as default};
