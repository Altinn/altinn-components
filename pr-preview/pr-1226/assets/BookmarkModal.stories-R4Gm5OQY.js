import{aa as m,a7 as o,c as l}from"./iframe-DTEeNdyk.js";import{B as r}from"./BookmarkModal-BIOqiQvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-dBfWKUwq.js";import"./ModalBody-CfnSJT4_.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Heading-DUvNz5de.js";import"./useHighlightedText-D9AI5Zbv.js";import"./ButtonGroup-C9iOkEQW.js";import"./ButtonIcon-3YefSWar.js";import"./ButtonLabel-aN9xoT5L.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./QueryLabel-WJ_IgqD6.js";import"./Plus-DS0hvWVt.js";import"./TextField-CwRDu9ti.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./Input-BxybDda_.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
