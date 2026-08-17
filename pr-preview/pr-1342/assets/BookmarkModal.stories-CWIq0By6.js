import{aa as m,a7 as o,c as l}from"./iframe-ju2_P8cU.js";import{B as r}from"./BookmarkModal-D0KrhIKA.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CRoAK6Cz.js";import"./ModalBody-DN8l4H7v.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Heading-BwdjGJ12.js";import"./useHighlightedText-Ds75xSSg.js";import"./ButtonGroup-B2X4F04D.js";import"./ButtonIcon-B8rfoecA.js";import"./ButtonLabel-De0xiolO.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./QueryLabel-BSdNDfg5.js";import"./Plus-Bezfg3ws.js";import"./TextField-jtg2S-WL.js";import"./FieldBase-B0oEW9Tf.js";import"./Typography-B5wbJTRa.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./Input-DOMevMNG.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
