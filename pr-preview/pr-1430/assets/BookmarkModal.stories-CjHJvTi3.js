var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-Bv9y2YZF.js";import{B as p}from"./BookmarkModal-DCP4AMdk.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C7UV_pJj.js";import"./ModalBody-Bb-z6REP.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonIcon-BgohvzPZ.js";import"./ButtonLabel--Rsf9jsc.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./QueryLabel-_hRDVL_a.js";import"./Plus-vOPLkYgp.js";import"./TextField-BKY9Zb_n.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
