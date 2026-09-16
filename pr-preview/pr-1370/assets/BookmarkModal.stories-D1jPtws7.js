import{aa as m,a7 as o,c as l}from"./iframe-DK26OyRD.js";import{B as r}from"./BookmarkModal-BT6fhmm0.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CFM_KvJS.js";import"./ModalBody-LJkI2hmG.js";import"./Section-5gLqA0oM.js";import"./Flex-Bsp6DeeI.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./ButtonGroup-3GFoI2vi.js";import"./ButtonIcon-prTPeC3u.js";import"./ButtonLabel-DONh2DdN.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./QueryLabel-CyHqQtKb.js";import"./Plus-BMnL1FI5.js";import"./TextField-DqUmkbQv.js";import"./FieldBase-BNgybH8j.js";import"./Typography-DLY6k0s2.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
