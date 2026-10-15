var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-BaqLtPTs.js";import{B as p}from"./BookmarkModal-F6wWXWly.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-1p4U1o-8.js";import"./ModalBody-n_1CR2eM.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonIcon-vCCOEFdH.js";import"./ButtonLabel-CYdCAiFt.js";import"./MagnifyingGlass-D84zuplr.js";import"./QueryLabel-B_MiZMoU.js";import"./Plus-C5MYAhCf.js";import"./TextField-C8XNl_7d.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
