import{aa as m,a7 as o,c as l}from"./iframe-B8reGtNb.js";import{B as r}from"./BookmarkModal-DQ0f9AR2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D614nUcg.js";import"./ModalBody-BAO_heQB.js";import"./Section-DovdLmcg.js";import"./Flex-qoZntq9f.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonIcon-CniHZAXy.js";import"./ButtonLabel-CwlIsNoM.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./QueryLabel-DSQbBYwx.js";import"./Plus-Ck-NVedy.js";import"./TextField-MODjpRwD.js";import"./FieldBase-DDJWfLpA.js";import"./Typography-Dxv9MSbD.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
