var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-DS_59AwM.js";import{B as p}from"./BookmarkModal-U1w0chHy.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C-3qMdZ6.js";import"./ModalBody-DwWBi8_C.js";import"./Section-C50awZDU.js";import"./Flex-kHR-J2An.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ButtonGroup-BVrUrJIV.js";import"./ButtonIcon-DfIk3itr.js";import"./ButtonLabel-CM1BrYjJ.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./QueryLabel-C07oFlTP.js";import"./Plus-Wv8vH7eI.js";import"./TextField-D4axFbpH.js";import"./FieldBase-Bv1sQ0dY.js";import"./Typography-DXt4lEYU.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
