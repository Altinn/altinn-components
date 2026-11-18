var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-Cf4UALw8.js";import{B as p}from"./BookmarkModal-DZdQYYHs.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-YzyxvoqZ.js";import"./ModalBody-D4pYrcnM.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonIcon-DQVaPbHm.js";import"./ButtonLabel-DhfYOY4K.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./QueryLabel-BAJfrwFL.js";import"./Plus-sEq00D2Y.js";import"./TextField-DiuOYn3x.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
