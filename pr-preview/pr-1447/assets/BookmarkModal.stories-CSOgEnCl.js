var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-CtXhLetY.js";import{B as p}from"./BookmarkModal-xNSJZ_PY.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C_c01Qjn.js";import"./ModalBody-Bv_B0VCd.js";import"./Section-BY6ZWS4H.js";import"./Flex-B2jEbRqX.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ButtonGroup-BWN2lsHW.js";import"./ButtonIcon-c1Jmgrga.js";import"./ButtonLabel-BHl8q492.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./QueryLabel-CAwshzuA.js";import"./Plus-CaMrdVwa.js";import"./TextField-0YAEkQ2-.js";import"./FieldBase-CnqvqYs3.js";import"./Typography-BeyzbKvD.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
