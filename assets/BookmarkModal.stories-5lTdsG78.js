import{aa as m,a7 as o,c as l}from"./iframe-DWxW88Wb.js";import{B as r}from"./BookmarkModal-BLU0sPBE.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-ZI_QNcze.js";import"./ModalBody-xWN5bJLh.js";import"./Section-B1-gfm2g.js";import"./Flex-DNJfc4Fp.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./ButtonGroup-2XmunmNq.js";import"./ButtonIcon-BQmJIoeH.js";import"./ButtonLabel-B02-0FY2.js";import"./MagnifyingGlass-DeszhIH4.js";import"./QueryLabel-U07_SSTB.js";import"./Plus-DPgCKFUP.js";import"./TextField-BJZMsOod.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
