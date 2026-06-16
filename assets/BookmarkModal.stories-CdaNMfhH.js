import{aa as m,a7 as o,c as l}from"./iframe-5uZaoZDv.js";import{B as r}from"./BookmarkModal-D_14--Md.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BVzJVcba.js";import"./ModalBody-DNZy-Qrb.js";import"./Section-BAWmKTu0.js";import"./Flex-n4FQi775.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ButtonGroup-BERBX_Ni.js";import"./ButtonIcon-DCP33fL5.js";import"./ButtonLabel-BsxQmxna.js";import"./MagnifyingGlass-BhHVps8f.js";import"./QueryLabel-soYM2iwT.js";import"./Plus-Niq-gKxO.js";import"./TextField-BmUy1KEc.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
