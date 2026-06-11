import{aa as m,a7 as o,c as l}from"./iframe-DH0sUlof.js";import{B as r}from"./BookmarkModal-LIalzajg.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Cd5h6AtQ.js";import"./ModalBody-Bsp1GUDI.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ButtonGroup-0Z_3vx9e.js";import"./ButtonIcon-CUIrIkpy.js";import"./ButtonLabel-BhcL_izL.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./QueryLabel-DmVMf24-.js";import"./Plus-CKgq15mC.js";import"./TextField-DAaECzgL.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
