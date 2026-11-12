var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CrglqwQn.js";import{B as p}from"./BookmarkModal-CNvtfcNI.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-Nr6jK-S2.js";import"./ModalBody-ywYcZdTp.js";import"./Section-DbuH07eX.js";import"./Flex-DJ9jSUVh.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./ButtonGroup-DBlS54nG.js";import"./ButtonIcon-CR0jjdG5.js";import"./ButtonLabel-DUOJn9GW.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./QueryLabel-DgoptpUX.js";import"./Plus-BsVWtc_l.js";import"./TextField-NIMGtDGP.js";import"./FieldBase-B81pLsMF.js";import"./Typography-BczTYRHT.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
