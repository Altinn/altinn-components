var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-DZEBeon6.js";import{B as p}from"./BookmarkModal-CjQn4Z-g.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CxFafKkC.js";import"./ModalBody-DIhMkcvy.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ButtonGroup-DaIoZCPY.js";import"./ButtonIcon-BqERaHvl.js";import"./ButtonLabel-B39oCvE4.js";import"./MagnifyingGlass-CTxcpUID.js";import"./QueryLabel-7J6HrgVy.js";import"./Plus-CVzkbDMT.js";import"./TextField-CMUYKHRm.js";import"./FieldBase-Ba-trh_u.js";import"./Typography-4TCMsL9d.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
