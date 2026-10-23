var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-Ck42qOx1.js";import{B as p}from"./BookmarkModal-Lpo053Id.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-DgcCT0IL.js";import"./ModalBody-0O6NY7SM.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonIcon-CYrEachb.js";import"./ButtonLabel-5wbsHXmv.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./QueryLabel-HCbK7DZ5.js";import"./Plus-1EeeSaLT.js";import"./TextField-BT_NxReM.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
