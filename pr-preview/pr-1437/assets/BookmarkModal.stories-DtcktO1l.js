var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-BXiLaIo1.js";import{B as p}from"./BookmarkModal-BHuFdXj_.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C9wR8a3u.js";import"./ModalBody-BqZQ8xjv.js";import"./Section-SFy5BcqJ.js";import"./Flex-BVJPbTQ_.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Heading-BSdWQg6G.js";import"./useHighlightedText-K6CHyIcM.js";import"./ButtonGroup-z8aQXTJr.js";import"./ButtonIcon-ChRdPhqI.js";import"./ButtonLabel-D7cBpyjL.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./QueryLabel-CBNrAuYb.js";import"./Plus-CrLkghCi.js";import"./TextField-BHvjvFbO.js";import"./FieldBase-jDY5NJAX.js";import"./Typography-DfF7AP8y.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
