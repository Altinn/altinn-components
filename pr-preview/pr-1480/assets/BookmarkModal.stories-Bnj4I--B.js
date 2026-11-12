var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-xlSYDLmX.js";import{B as p}from"./BookmarkModal-yH7bv6lx.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C1-SabfD.js";import"./ModalBody-2B3xwQox.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ButtonGroup-CmZy2FTH.js";import"./ButtonIcon-C0Iduzzq.js";import"./ButtonLabel-DtsaJMNL.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./QueryLabel-B1YmIHq2.js";import"./Plus-B94II9lJ.js";import"./TextField-CPjrIzns.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
