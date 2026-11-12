var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CqoHfDH7.js";import{B as p}from"./BookmarkModal-CiggSHr5.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BNLp4N0e.js";import"./ModalBody-CiSC6mzB.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonIcon-CRl4eaFH.js";import"./ButtonLabel-DpOqQbl0.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./QueryLabel-5ur60BDf.js";import"./Plus-DQZnEDJR.js";import"./TextField-BTeXfEgc.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
