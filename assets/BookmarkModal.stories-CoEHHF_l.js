var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a8 as i,a5 as o,b as c}from"./iframe-BfD7syly.js";import{B as p}from"./BookmarkModal-Jfot6IOV.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BAff8Jkt.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./QueryLabel-CaU1Vxco.js";import"./Plus-Oie_r0eR.js";import"./TextField-Gc8uNQmn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
