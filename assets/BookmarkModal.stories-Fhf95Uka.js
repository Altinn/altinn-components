var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-CHdTRX1S.js";import{B as p}from"./BookmarkModal-BXEeRD4-.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-ciEMEXzg.js";import"./ModalBody-BiQ99NwW.js";import"./Section-C-qQMjwL.js";import"./Flex-BzRwEaeD.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ButtonGroup-DccEHAHc.js";import"./ButtonIcon-BDrjexQx.js";import"./ButtonLabel-DN7WHzkG.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./QueryLabel-CMjZ_eIU.js";import"./Plus-XpG4Dc8n.js";import"./TextField-DV1D8C-w.js";import"./FieldBase-CkHB3870.js";import"./Typography-6g7ttECm.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
