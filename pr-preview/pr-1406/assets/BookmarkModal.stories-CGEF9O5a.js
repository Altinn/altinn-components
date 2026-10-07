import{aa as m,a7 as o,c as l}from"./iframe-CH8mgD3C.js";import{B as r}from"./BookmarkModal-DB1OMaX1.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CscdPQmC.js";import"./ModalBody-B0R0uENp.js";import"./Section-BXIrXZ89.js";import"./Flex-f5LhVaqN.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./ButtonGroup-DasozfmK.js";import"./ButtonIcon-Cv6m6W2w.js";import"./ButtonLabel-Bl84KvUO.js";import"./MagnifyingGlass-BnEAksKO.js";import"./QueryLabel-DQAKsAS1.js";import"./Plus-OvBsSWIf.js";import"./TextField-BHWc_bX8.js";import"./FieldBase-D9urOdyW.js";import"./Typography-ClkFzU7o.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
