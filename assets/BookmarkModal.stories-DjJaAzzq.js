import{aa as m,a7 as o,c as l}from"./iframe-BlxKDeRn.js";import{B as r}from"./BookmarkModal-CrivFy57.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DtHl80GM.js";import"./ModalBody-BIhvolNB.js";import"./Section-phQiwh1A.js";import"./Flex-ETYKhAb5.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Heading-PlHpJzKQ.js";import"./useHighlightedText-Cf7684f7.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonIcon-COE5rocZ.js";import"./ButtonLabel-Cw-39_hF.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./QueryLabel-wjFaPa27.js";import"./Plus-D-AEmb15.js";import"./TextField-D1EOpeD3.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
