var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-BhbNl8M-.js";import{B as p}from"./BookmarkModal-CEZXNPoK.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C5lElqHH.js";import"./ModalBody-MK76vZzv.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonIcon-7FhxMerM.js";import"./ButtonLabel-Cq2XOZ5S.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./QueryLabel-y5wveDgK.js";import"./Plus-BcmDIJkz.js";import"./TextField-hoToHKJf.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
