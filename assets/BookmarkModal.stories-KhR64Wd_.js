import{aa as m,a7 as o,c as l}from"./iframe-BlyVQ5Wf.js";import{B as r}from"./BookmarkModal-OBbyVsqO.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CyjPTL0W.js";import"./ModalBody-ysC7XFdN.js";import"./Section-_AUVgHqB.js";import"./Flex-CGPMEzYL.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./ButtonGroup-ksQ-pxhG.js";import"./ButtonIcon-DiHoEPkC.js";import"./ButtonLabel-z2FuEDUj.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./QueryLabel-tiVAncWd.js";import"./Plus-BtBVLn4K.js";import"./TextField-Cw6le05T.js";import"./FieldBase-CZEUpIPU.js";import"./Typography-xETneU90.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
