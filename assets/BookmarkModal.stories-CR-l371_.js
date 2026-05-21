import{r as s,j as o}from"./iframe-BDpWuaMs.js";import{B as e}from"./BookmarkModal-CmJvVBsp.js";import{B as i}from"./Button-m_FXpHGO.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Bm7XFvqp.js";import"./ModalBody-B45xukPd.js";import"./Section-B9Daowr7.js";import"./index-DVPUayQ0.js";import"./Flex-zEgiMRQg.js";import"./XMark-Cx5Omj8e.js";import"./useId-BKmV9YxM.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ButtonGroup-DdOFFFWL.js";import"./ButtonIcon-BKilWA_u.js";import"./ButtonLabel-BQStCFIw.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./QueryLabel-BgKu4SlG.js";import"./Plus-CPPR_4GW.js";import"./TextField-BVtlLRT2.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./Label-7jR2lGh9.js";import"./tooltip-DLcd2lCg.js";import"./Input-BoCHA0_0.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
