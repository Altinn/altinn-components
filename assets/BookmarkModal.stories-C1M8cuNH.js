import{aa as m,a7 as o,c as l}from"./iframe-qmQCxFa-.js";import{B as r}from"./BookmarkModal-BUSpD03u.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BgKQBtSZ.js";import"./ModalBody-90KYXdlU.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Heading-BfhEliS6.js";import"./useHighlightedText-DvW-80BF.js";import"./ButtonGroup-_CfbD1Th.js";import"./ButtonIcon-BsscKFAt.js";import"./ButtonLabel-B8phRdNa.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./QueryLabel-CV-T5JTx.js";import"./Plus-CuimFGeS.js";import"./TextField-BtJt0HFX.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
