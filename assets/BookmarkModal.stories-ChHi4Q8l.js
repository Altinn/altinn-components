var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-DmXJhoHi.js";import{B as p}from"./BookmarkModal-CAeDMcLp.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CSapL9iW.js";import"./ModalBody-BU-B0KnO.js";import"./Section-Db3Vzokt.js";import"./Flex-B-7ly2La.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ButtonGroup-BIAjr8pe.js";import"./ButtonIcon-CnF9Iw1q.js";import"./ButtonLabel-DJ2eDReA.js";import"./MagnifyingGlass-CDTvYECp.js";import"./QueryLabel-D8Z-pXBg.js";import"./Plus-B95oMHgF.js";import"./TextField-BxIncV3C.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
