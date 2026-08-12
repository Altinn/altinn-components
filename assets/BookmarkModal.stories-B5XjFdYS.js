import{aa as m,a7 as o,c as l}from"./iframe-BOq385O8.js";import{B as r}from"./BookmarkModal-I3HAvKQn.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BFCJlhuD.js";import"./ModalBody-CnCSIXjS.js";import"./Section-B7vrx1o8.js";import"./Flex-CyZuoM67.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./ButtonGroup-D8WIpAHE.js";import"./ButtonIcon-By9qcYwT.js";import"./ButtonLabel-BXEtCYpU.js";import"./MagnifyingGlass-DLwuof1g.js";import"./QueryLabel-26WLPKAT.js";import"./Plus-7pPCm0cp.js";import"./TextField-CqnZ-ScL.js";import"./FieldBase-SENAbJS5.js";import"./Typography-DYb-ep--.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
