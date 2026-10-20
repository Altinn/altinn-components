var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-CW69B4-4.js";import{B as p}from"./BookmarkModal-CUTZn77V.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-Csmc-w-c.js";import"./ModalBody-DjVjmbs2.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ButtonGroup-Bd6oXbKy.js";import"./ButtonIcon-DDkKoEB2.js";import"./ButtonLabel-DwtT3aqm.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./QueryLabel-CeEvFdab.js";import"./Plus-BD6Fr9o4.js";import"./TextField-CM3gnTYW.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
