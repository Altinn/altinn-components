import{aa as m,a7 as o,c as l}from"./iframe-CD11FhkO.js";import{B as r}from"./BookmarkModal-BHQs5VV9.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CN3EwZPn.js";import"./ModalBody-DMNSFyMM.js";import"./Section-Cxsr3_z_.js";import"./Flex-BFs7VkGF.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./ButtonGroup-CI_suWzv.js";import"./ButtonIcon-DSZ34whE.js";import"./ButtonLabel-CGB1_n10.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./QueryLabel-0SXHX8FH.js";import"./Plus-CAOm99TL.js";import"./TextField-DiXyD-K6.js";import"./FieldBase-BjWFGCCi.js";import"./Typography-CsSTPRBO.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
