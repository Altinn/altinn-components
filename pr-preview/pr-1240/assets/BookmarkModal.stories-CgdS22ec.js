import{aa as m,a7 as o,c as l}from"./iframe-C3-39QZn.js";import{B as r}from"./BookmarkModal-DrzaAB3v.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BXOmvntj.js";import"./ModalBody-zCgDpQcI.js";import"./Section-B5UTl4N5.js";import"./Flex-cOQ4YkiH.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ButtonGroup-BudWnE7m.js";import"./ButtonIcon-BUSJeZxi.js";import"./ButtonLabel-DDZPkCx5.js";import"./MagnifyingGlass-W4-YHK47.js";import"./QueryLabel-CRUzB3YJ.js";import"./Plus-CD1Lx9Ec.js";import"./TextField-CobAz6ps.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./Input-Ck9X-Ajd.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
