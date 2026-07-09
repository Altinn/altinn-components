import{aa as m,a7 as o,c as l}from"./iframe-BZiA3Dc9.js";import{B as r}from"./BookmarkModal-CIzNnwhY.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DmpepEFy.js";import"./ModalBody-CEOKzm3S.js";import"./Section-B5v4sxTq.js";import"./Flex-DlKNIBbG.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./ButtonGroup-CQ4JbS4J.js";import"./ButtonIcon-CMUqdBu-.js";import"./ButtonLabel-BZQLbjuh.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./QueryLabel-DWtmKCRS.js";import"./Plus-DuB6ksxl.js";import"./TextField-a1zywizD.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
