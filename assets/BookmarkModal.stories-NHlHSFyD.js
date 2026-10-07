import{aa as m,a7 as o,c as l}from"./iframe-RnExGCnN.js";import{B as r}from"./BookmarkModal-nB2iL28m.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D-4zKF3k.js";import"./ModalBody-Bso5XhNl.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./ButtonGroup-CxEAmlK5.js";import"./ButtonIcon-DtB95v_v.js";import"./ButtonLabel-Dd7SipEs.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./QueryLabel-CScutXJW.js";import"./Plus-BRt8-Ub-.js";import"./TextField-yGpJpctq.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
