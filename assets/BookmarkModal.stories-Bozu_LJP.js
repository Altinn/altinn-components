import{aa as m,a7 as o,c as l}from"./iframe-BKcGtkf2.js";import{B as r}from"./BookmarkModal-1JTgJ0JC.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-D30D0iEp.js";import"./ModalBody-CG2c_jkx.js";import"./Section-DaRR8FNt.js";import"./Flex-xlDXZNwq.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ButtonGroup-Cf_eaZSI.js";import"./ButtonIcon-DQs2Pht3.js";import"./ButtonLabel-CUaD82Hk.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./QueryLabel-D_NsyksQ.js";import"./Plus-Rs3Q664C.js";import"./TextField-DDlenc7c.js";import"./FieldBase-kOxFDexg.js";import"./Typography-CpSlwMZW.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
