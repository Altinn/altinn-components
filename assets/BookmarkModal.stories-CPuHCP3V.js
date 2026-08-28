import{aa as m,a7 as o,c as l}from"./iframe-Drliw4W2.js";import{B as r}from"./BookmarkModal-Duk_C2OR.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CQf4QPbv.js";import"./ModalBody-Dclc077g.js";import"./Section-zMN4ePg0.js";import"./Flex-Bge8S33P.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Heading-CnkMiV4w.js";import"./useHighlightedText-Cu370CX4.js";import"./ButtonGroup-DIwL-jQY.js";import"./ButtonIcon-BqRKOYIO.js";import"./ButtonLabel-CL7OHOIR.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./QueryLabel-o76d4cqm.js";import"./Plus-gkf6Iyzi.js";import"./TextField-CNxBSA0P.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
