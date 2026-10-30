var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a8 as i,a5 as o,b as c}from"./iframe-k-5ppgch.js";import{B as p}from"./BookmarkModal-CNZqQN0k.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C25gVZ6b.js";import"./ModalBody-CIuqRrmc.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ButtonGroup-B2jA2Tqh.js";import"./ButtonIcon-w0mUwAgm.js";import"./ButtonLabel-CaO7Cf6Y.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./QueryLabel-DVaeMmMn.js";import"./Plus-BfzF3o2K.js";import"./TextField-DwcD3VdB.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
