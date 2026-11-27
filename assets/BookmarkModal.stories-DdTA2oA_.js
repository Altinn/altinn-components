var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-DV7mfmQb.js";import{B as p}from"./BookmarkModal-CSJsn_uy.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CdI5wiK5.js";import"./ModalBody-33j9noUT.js";import"./Section-BXLF8mP1.js";import"./Flex-DFf5qQ3F.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./Heading-qQ_NecB3.js";import"./useHighlightedText-DBlSdXli.js";import"./ButtonGroup-D14KKgW3.js";import"./ButtonIcon-DlYSIism.js";import"./ButtonLabel-BoFyGOO4.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./QueryLabel-Cj9siz0V.js";import"./Plus-sUzSSeT3.js";import"./TextField-BMcHuUVO.js";import"./FieldBase-BPbtcuhV.js";import"./Typography-DQaNXpVK.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
