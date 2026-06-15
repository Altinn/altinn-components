import{aa as m,a7 as o,c as l}from"./iframe-Dr1YYpI1.js";import{B as r}from"./BookmarkModal-gRbt8P4j.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-rGIq4aQc.js";import"./ModalBody-F3dsMu5Q.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./ButtonGroup-B0d19ndD.js";import"./ButtonIcon-Bf7UK4aY.js";import"./ButtonLabel-Bo8mZTJ3.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./QueryLabel-BlT9TgCH.js";import"./Plus-BM0HHz2J.js";import"./TextField-r5jzqpCl.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
