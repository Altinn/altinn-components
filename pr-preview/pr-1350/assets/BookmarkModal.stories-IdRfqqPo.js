import{aa as m,a7 as o,c as l}from"./iframe-DklMp8b9.js";import{B as r}from"./BookmarkModal-ANP3tzPO.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Cv0cYgwh.js";import"./ModalBody-r6-Hi5A7.js";import"./Section-DuAEz57j.js";import"./Flex-CsvoEycQ.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ButtonGroup-Vwrh_ftH.js";import"./ButtonIcon-D6knLLc8.js";import"./ButtonLabel-Dr-psq7U.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./QueryLabel-B2mp9rlQ.js";import"./Plus-K4OeXXOA.js";import"./TextField-Clj1v6xC.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./Input-DDvcPBDR.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
