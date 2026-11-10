var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-DV5agHf5.js";import{B as p}from"./BookmarkModal-uoCcuh2Q.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CKmyGb9E.js";import"./ModalBody-DjOJuTHC.js";import"./Section-DqVAP5w4.js";import"./Flex-BRxWwGAq.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./ButtonGroup-CmPYcscv.js";import"./ButtonIcon-Dul20VIj.js";import"./ButtonLabel-DsirOtXC.js";import"./MagnifyingGlass-tTfHyx-p.js";import"./QueryLabel-0gh9q1QW.js";import"./Plus-BR13EOsl.js";import"./TextField-DdFqi9DN.js";import"./FieldBase-D4-LzoRW.js";import"./Typography-DklD6Rdi.js";import"./Field-BelDBEf0.js";import"./Label-DXhZaYP8.js";import"./Input-CfHBGeL6.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
