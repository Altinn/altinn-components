import{aa as m,a7 as o,c as l}from"./iframe-BBxI6Qoj.js";import{B as r}from"./BookmarkModal-LYcmp7Gq.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DAtA4H0Z.js";import"./ModalBody-p8b8lRFV.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./ButtonGroup-xNpv9tyz.js";import"./ButtonIcon-__oVwPy4.js";import"./ButtonLabel-CtWAJHpe.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./QueryLabel-DQnX2ifk.js";import"./Plus-CVz3L4Fh.js";import"./TextField-jx3_jaTi.js";import"./FieldBase-De9CwOeM.js";import"./Typography-DsE98WBK.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
