import{aa as m,a7 as o,c as l}from"./iframe-BtrieXtc.js";import{B as r}from"./BookmarkModal-CexpIG4i.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BH3rW1aX.js";import"./ModalBody-B4Te2i-O.js";import"./Section-UNmwoB7j.js";import"./Flex-Dld0WRRq.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Heading-CdtnAJEW.js";import"./useHighlightedText-B6dVubhR.js";import"./ButtonGroup-CVtevVNY.js";import"./ButtonIcon-nvXcIoKP.js";import"./ButtonLabel-CyEgs9OW.js";import"./MagnifyingGlass-C5aguymI.js";import"./QueryLabel-DOFYZ5m_.js";import"./Plus-AauV6il6.js";import"./TextField-DM_urZ6l.js";import"./FieldBase-CTDBNJ5K.js";import"./Typography-BRa08Jyj.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
