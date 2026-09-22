import{aa as m,a7 as o,c as l}from"./iframe-COBbWeA3.js";import{B as r}from"./BookmarkModal-D04a9QGd.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-QKjEc8Cf.js";import"./ModalBody-Ceid2vmt.js";import"./Section-4iuaFN40.js";import"./Flex-D1m969Q2.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./ButtonGroup-BLVUIK36.js";import"./ButtonIcon-eJ5o8zW1.js";import"./ButtonLabel-EuAdkLCo.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./QueryLabel-D7CnTiRm.js";import"./Plus-CZeME9An.js";import"./TextField-BshP868l.js";import"./FieldBase-DRB9b-3z.js";import"./Typography-BEwm6wl9.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./Input-BuLWJ9G8.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
