import{s,p as o}from"./iframe-BBbEwSaq.js";import{B as e}from"./BookmarkModal-97exq_Ui.js";import{B as i}from"./Button-DpW4Pu6O.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CoQVwDnP.js";import"./ModalBody-OK8R4PDd.js";import"./Section-Dq0xs0Y_.js";import"./index-awH0sXcw.js";import"./Flex-Cc0Ueohf.js";import"./XMark-Dw8JSfSd.js";import"./useId-DZp72-eX.js";import"./Icon-Cx6QAjG2.js";import"./Skeleton-DFF9p8Mx.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonIcon-DIFqTzZe.js";import"./ButtonLabel-B0mhwuEU.js";import"./MagnifyingGlass-B6FIAadU.js";import"./QueryLabel-CCla4rNK.js";import"./Plus-CmpsnneT.js";import"./TextField-DWaQI9gc.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./Label-DdMEJ83A.js";import"./tooltip-D3G3Ewte.js";import"./Input-lqau07kD.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
