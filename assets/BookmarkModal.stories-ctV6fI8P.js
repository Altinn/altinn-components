import{aa as m,a7 as o,c as l}from"./iframe-CENvAP26.js";import{B as r}from"./BookmarkModal-DbKbbhqM.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-fj349tuh.js";import"./ModalBody-BPAT2cvX.js";import"./Section-Dfl51lKI.js";import"./Flex-yTAvUoR1.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./ButtonGroup-C4l5taXG.js";import"./ButtonIcon-CfWllzoR.js";import"./ButtonLabel-CGMQv3HF.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./QueryLabel-BP7BuKC8.js";import"./Plus-CWY-kAGj.js";import"./TextField-fdkUYqPj.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
