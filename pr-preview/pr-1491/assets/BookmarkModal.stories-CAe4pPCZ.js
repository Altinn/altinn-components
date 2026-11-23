var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-HroKCH1i.js";import{B as p}from"./BookmarkModal-Bvh2xEv-.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-DcnN5o9V.js";import"./ModalBody-BQv1Fp6f.js";import"./Section-C0qOnBgx.js";import"./Flex-CL3BtjUZ.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ButtonGroup-Ds7x4PTq.js";import"./ButtonIcon-NRkGjrsB.js";import"./ButtonLabel-BQfOlvzM.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./QueryLabel-C26Ke2lK.js";import"./Plus-CnaATfP4.js";import"./TextField-Bz7blcaa.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
