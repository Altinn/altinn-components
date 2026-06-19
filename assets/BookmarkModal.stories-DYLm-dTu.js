import{aa as m,a7 as o,c as l}from"./iframe-DmJr8_aG.js";import{B as r}from"./BookmarkModal-DmWtLk-6.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-B1XNc6l-.js";import"./ModalBody-C0hCt4EK.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ButtonGroup-ps_HIdpu.js";import"./ButtonIcon-lLWPwtnI.js";import"./ButtonLabel-CTdEbbj7.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./QueryLabel-D06Z-39I.js";import"./Plus-CfdwKNmJ.js";import"./TextField-Cv73iNpE.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
