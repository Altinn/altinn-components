import{aa as m,a7 as o,c as l}from"./iframe-cf7ESM3q.js";import{B as r}from"./BookmarkModal-DZBrF5pH.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DbIBSzvV.js";import"./ModalBody-VT_dxbpd.js";import"./Section-DoG5yznh.js";import"./Flex-BG_p9pKV.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./ButtonGroup-7_JFosKC.js";import"./ButtonIcon-BkOaHRFK.js";import"./ButtonLabel-C2_4Zy3g.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./QueryLabel-BBoHYekD.js";import"./Plus-DZ3k40hQ.js";import"./TextField-Ujy-2-ni.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
