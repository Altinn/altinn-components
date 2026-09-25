import{aa as m,a7 as o,c as l}from"./iframe-CsUY_6Pm.js";import{B as r}from"./BookmarkModal-BZz262A4.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DEcYPgJ9.js";import"./ModalBody-CQkVoQZl.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./ButtonGroup-BnfYb0Ol.js";import"./ButtonIcon-BS7n_J2G.js";import"./ButtonLabel-DqKrA-HR.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./QueryLabel-BgpnKryv.js";import"./Plus-BIbNWuxu.js";import"./TextField-BZE1wr5O.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
