var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CJbVApVd.js";import{B as p}from"./BookmarkModal-CPxCk1Hp.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BrOxt4-B.js";import"./ModalBody-CibPyY7R.js";import"./Section-senxxBaK.js";import"./Flex-DQBhfYN9.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonIcon-CXdZoXpr.js";import"./ButtonLabel-DVwE6I-4.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./QueryLabel-nefARRkF.js";import"./Plus-C_JJ1fS4.js";import"./TextField-C0Epio0R.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
