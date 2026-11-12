var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-M-0W2Kc9.js";import{B as p}from"./BookmarkModal-CkuhbvSg.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-QTOJw0zh.js";import"./ModalBody-D2JzRsow.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonIcon-B0Ww61Ca.js";import"./ButtonLabel-DaZOBcYC.js";import"./MagnifyingGlass-BCQWJszI.js";import"./QueryLabel-B7kGTmjQ.js";import"./Plus-DyAe2qPf.js";import"./TextField-CHQPvnNv.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
