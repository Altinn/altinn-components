var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-BW6sNfUG.js";import{B as p}from"./BookmarkModal-8TgXwt8U.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CPgr95ko.js";import"./ModalBody-iaAxc7Vl.js";import"./Section-C6OUO-lD.js";import"./Flex-Ws1WKTNd.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ButtonGroup-CkPO8wDs.js";import"./ButtonIcon-ByUF5niU.js";import"./ButtonLabel-ByUlEqji.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./QueryLabel-RFsuRDbV.js";import"./Plus-CdPXJ-Lc.js";import"./TextField-B3MTsir2.js";import"./FieldBase-CiEo5wf3.js";import"./Typography-DluWU8As.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
