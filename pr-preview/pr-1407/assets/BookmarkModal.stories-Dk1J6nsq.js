var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a8 as i,a5 as o,b as c}from"./iframe-CmcSEjvS.js";import{B as p}from"./BookmarkModal-Ba2F3NSj.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CfdN6cEJ.js";import"./ModalBody-_pzP4G9c.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ButtonGroup-Cpml5GDI.js";import"./ButtonIcon-qcPphlSi.js";import"./ButtonLabel-C3jzDSjq.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./QueryLabel-6w8JNXyd.js";import"./Plus-DVOeMTJ7.js";import"./TextField-DFisW25Z.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
