import{r as s,j as o}from"./iframe-D-ID03Ik.js";import{B as e}from"./BookmarkModal-6k9KfcnO.js";import{B as i}from"./Button-CO1zFGa4.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Be5AEnKf.js";import"./ModalBody-CNB4VnH4.js";import"./Section-Df_v2ciX.js";import"./index-DpFyEq-2.js";import"./Flex-pOoXofWS.js";import"./XMark-DAr8sgUQ.js";import"./useId-DxZoCrQU.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ButtonGroup-vd8KP0y5.js";import"./ButtonIcon-BTj5a5hg.js";import"./ButtonLabel-D9Z2FXBW.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./QueryLabel-CG_dAIz0.js";import"./Plus-DTGwq1FZ.js";import"./TextField-Xdm4FrUx.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./Label-DsF9mxAr.js";import"./tooltip-CH7-mov_.js";import"./Input-BflTpPuJ.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
