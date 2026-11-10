var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CfESZwGq.js";import{B as p}from"./BookmarkModal-Dj0srzye.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BsVJPuAI.js";import"./ModalBody-BLp5zyl4.js";import"./Section-CXHovEsj.js";import"./Flex-DCvAlmz5.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./ButtonGroup-B_R5r7Ky.js";import"./ButtonIcon-CMvu13gC.js";import"./ButtonLabel-BX3qt1RO.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./QueryLabel-DaQAnvTh.js";import"./Plus-C15azGMz.js";import"./TextField-CKOvOvtn.js";import"./FieldBase-B5R0NBwO.js";import"./Typography-DtLS48Hu.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
