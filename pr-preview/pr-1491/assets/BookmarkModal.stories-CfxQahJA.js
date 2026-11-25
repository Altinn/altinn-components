var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-BYGPhf7N.js";import{B as p}from"./BookmarkModal-DGMK40OX.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-Ocr_lCKp.js";import"./ModalBody-CY91l2Bs.js";import"./Section-BRaGuhHv.js";import"./Flex-DJhBIPT8.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonIcon-DdgcgrDi.js";import"./ButtonLabel-CfdqJJd8.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./QueryLabel-CiGbvFdK.js";import"./Plus-ChNYXBRv.js";import"./TextField-DSU2FLcY.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
