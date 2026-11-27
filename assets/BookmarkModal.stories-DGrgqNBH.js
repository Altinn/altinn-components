var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-qf9-WDF6.js";import{B as p}from"./BookmarkModal-BgKj1WbB.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-FCkxCcqJ.js";import"./ModalBody-DN9VxJSA.js";import"./Section-ChrYIfRO.js";import"./Flex-CKfD6hy-.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ButtonGroup-DXN6Nzfu.js";import"./ButtonIcon-R8pdQrM7.js";import"./ButtonLabel-BM87ZlED.js";import"./MagnifyingGlass-Cdozzsty.js";import"./QueryLabel-BOHBnPIE.js";import"./Plus-BtfN9nMF.js";import"./TextField-CV6k6a3U.js";import"./FieldBase-D7ZJbpSW.js";import"./Typography-BcM5UJCL.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
