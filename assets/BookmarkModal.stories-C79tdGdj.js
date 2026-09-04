import{aa as m,a7 as o,c as l}from"./iframe-Bg-ykIGY.js";import{B as r}from"./BookmarkModal-CEqo2qhz.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DoDAcvH9.js";import"./ModalBody-9RwRyUWe.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./ButtonGroup-D3TFK-sP.js";import"./ButtonIcon-BN0vPuAv.js";import"./ButtonLabel-DGmLIPRz.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./QueryLabel-Dv04T57B.js";import"./Plus-CRKlQLAt.js";import"./TextField-C5-1usr1.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
