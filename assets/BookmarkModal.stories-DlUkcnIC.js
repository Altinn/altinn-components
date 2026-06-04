import{aa as m,a7 as o,c as l}from"./iframe-CDUjh_2z.js";import{B as r}from"./BookmarkModal-CHCpcvuO.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DYhCA59-.js";import"./ModalBody-BznBWo4M.js";import"./Section-xHms6zkB.js";import"./Flex-Bc1_yHC5.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./ButtonGroup-Bu9UDZzJ.js";import"./ButtonIcon-BlI-wN7T.js";import"./ButtonLabel-C8ei22k7.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./QueryLabel-YAE07W5y.js";import"./Plus-BtkWHSVH.js";import"./TextField-CAPXyLNN.js";import"./FieldBase-CC2tJByH.js";import"./Typography-HCvo8I75.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
