import{aa as m,a7 as o,c as l}from"./iframe-CdYVD6SD.js";import{B as r}from"./BookmarkModal-BwAX319l.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-oeTO1HA_.js";import"./ModalBody-BPE_VM4S.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Heading-Kaqd1h94.js";import"./useHighlightedText-DItA3cBY.js";import"./ButtonGroup-B-NgaNCB.js";import"./ButtonIcon-Cf34fIGP.js";import"./ButtonLabel-D6MSJXz4.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./QueryLabel-D_HrqRTl.js";import"./Plus-CF5KtJsD.js";import"./TextField-DOJrkQe9.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
