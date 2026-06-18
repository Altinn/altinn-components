import{aa as m,a7 as o,c as l}from"./iframe-DK-3qaH3.js";import{B as r}from"./BookmarkModal-DWD5RMu-.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DUR2VTRq.js";import"./ModalBody-DZQNHHny.js";import"./Section-DmYaryGo.js";import"./Flex-BBCXBNec.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./ButtonGroup-DGe-ZwJP.js";import"./ButtonIcon-CfGlO7so.js";import"./ButtonLabel-D_XAGhmx.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./QueryLabel-C705qnjc.js";import"./Plus-CUtJiv66.js";import"./TextField-Cv5ThxSp.js";import"./FieldBase-CZ_e8plx.js";import"./Typography-B48kpFr9.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
