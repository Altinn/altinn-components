import{aa as m,a7 as o,c as l}from"./iframe-D-JzFSbn.js";import{B as r}from"./BookmarkModal-D6LJgYC-.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BCGiznCY.js";import"./ModalBody-C_e5HAx8.js";import"./Section-C7pnuU7Y.js";import"./Flex-LyiOw0eI.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./ButtonGroup-DM3FeQWD.js";import"./ButtonIcon-BlmrgHJU.js";import"./ButtonLabel-D-OBonPW.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./QueryLabel-DRuLqCf9.js";import"./Plus-D_QwnLRF.js";import"./TextField-3RnNCSAg.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
