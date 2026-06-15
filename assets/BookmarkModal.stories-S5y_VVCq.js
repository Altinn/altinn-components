import{aa as m,a7 as o,c as l}from"./iframe-CH-Rf2AI.js";import{B as r}from"./BookmarkModal-5RpAYdF5.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Bx3rcEds.js";import"./ModalBody-DWS6WpdW.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonIcon-CIT11Yqm.js";import"./ButtonLabel-DngeK8JL.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./QueryLabel-BtHWbHzV.js";import"./Plus-BQYmFmTa.js";import"./TextField-B2WC8qDF.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
