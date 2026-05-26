import{r as s,j as o}from"./iframe-DU0n7__8.js";import{B as e}from"./BookmarkModal-kY30Tkm5.js";import{B as i}from"./Button-pXyw-iqn.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DHjDeK3E.js";import"./ModalBody-DelIgQsz.js";import"./Section-DwU7Gyqo.js";import"./index-sAFX08uI.js";import"./Flex-C_O_eubX.js";import"./XMark-DGVnrVrT.js";import"./useId-DCXiBgwp.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonIcon-FC_tMBA0.js";import"./ButtonLabel-DfiBlqye.js";import"./MagnifyingGlass-COVfkIqf.js";import"./QueryLabel-CaEIA6-Q.js";import"./Plus-BxZePwQm.js";import"./TextField-Dl9QfE1k.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./Label-DSFEyVbW.js";import"./tooltip-UENHGvJl.js";import"./Input-Cjh3ClWU.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
