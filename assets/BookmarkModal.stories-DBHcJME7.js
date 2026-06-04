import{aa as m,a7 as o,c as l}from"./iframe-bg3nhc5C.js";import{B as r}from"./BookmarkModal-DzenJoU3.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BOtM7eQZ.js";import"./ModalBody-CViOeQEG.js";import"./Section-0QuSZB3S.js";import"./Flex-CxgPTFrH.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Heading-CqXKSZEg.js";import"./useHighlightedText-Ct2V138i.js";import"./ButtonGroup-BzB2tyZw.js";import"./ButtonIcon-Bj-DkHCc.js";import"./ButtonLabel-ga4a8HUc.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./QueryLabel-CBnA5vPq.js";import"./Plus-T7SFOg3q.js";import"./TextField-9MWE8u_5.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
