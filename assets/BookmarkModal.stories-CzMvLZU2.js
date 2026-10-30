var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a8 as i,a5 as o,b as c}from"./iframe-BenRi1VF.js";import{B as p}from"./BookmarkModal-Df5vbQD3.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-S5lNaw-2.js";import"./ModalBody-BDISOh7_.js";import"./Section-DdVAzkd7.js";import"./Flex-BtqRQeFd.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ButtonGroup-DfExJwTd.js";import"./ButtonIcon-DzVR_6eI.js";import"./ButtonLabel-Dc0yF6DK.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./QueryLabel-D1OISUcv.js";import"./Plus-EZwUhJBV.js";import"./TextField-FwFzsLvU.js";import"./FieldBase-Blf3tEjx.js";import"./Typography-CY6bfOBd.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
