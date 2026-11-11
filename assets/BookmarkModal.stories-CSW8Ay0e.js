var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CXqMdlCC.js";import{B as p}from"./BookmarkModal-ZG4O8Bge.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-DPE_iqX8.js";import"./ModalBody-DEbIyzzf.js";import"./Section-CK-XPJWb.js";import"./Flex-C0b8jFL9.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ButtonGroup-ilSUnB_k.js";import"./ButtonIcon-zWanBr0a.js";import"./ButtonLabel-B5q4OgvD.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./QueryLabel-CJMXVMRL.js";import"./Plus-BUwnjirz.js";import"./TextField-BxHcHNDN.js";import"./FieldBase-0KjilGfX.js";import"./Typography-B65oo-6B.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
