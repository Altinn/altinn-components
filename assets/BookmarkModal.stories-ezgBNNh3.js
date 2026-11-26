var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-Dhr5kNpI.js";import{B as p}from"./BookmarkModal-20LDTjZH.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-Ch2wktR-.js";import"./ModalBody-bj2s7Dy2.js";import"./Section-xZgyq4QZ.js";import"./Flex-CQB0dbJh.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonIcon-3_G48aTa.js";import"./ButtonLabel-Dyo1xgTN.js";import"./MagnifyingGlass-qp743Sh-.js";import"./QueryLabel-CkViHas5.js";import"./Plus-CJyVTS1m.js";import"./TextField-BRsrf4PY.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
