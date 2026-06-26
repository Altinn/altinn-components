import{aa as m,a7 as o,c as l}from"./iframe-C2dzRmjh.js";import{B as r}from"./BookmarkModal-CSe2F2si.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BlxIbakF.js";import"./ModalBody-EYKNgO6y.js";import"./Section-DIoxVkTZ.js";import"./Flex-Cz2ESd29.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ButtonGroup-BU_SIQJX.js";import"./ButtonIcon-CeiijB1e.js";import"./ButtonLabel-BRr_e9Mc.js";import"./MagnifyingGlass-D4s7mQ1G.js";import"./QueryLabel-DGxvVyOE.js";import"./Plus-CZi1FHk4.js";import"./TextField-ZDeL-kQh.js";import"./FieldBase-Dvh5lIYF.js";import"./Typography-DJs4mnKu.js";import"./Field-B-1S4h3H.js";import"./Label-_M2OAFvX.js";import"./Input-DA-lDvIm.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
