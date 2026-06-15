import{aa as m,a7 as o,c as l}from"./iframe-h3kpEY-8.js";import{B as r}from"./BookmarkModal-BRPFuaof.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DxrZ8oAm.js";import"./ModalBody-lChWNEBC.js";import"./Section-CgbWqpsb.js";import"./Flex-BmiGVQGS.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./ButtonGroup-CTYKvx28.js";import"./ButtonIcon-CkVeYQtg.js";import"./ButtonLabel-DuUqN0Cv.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./QueryLabel-fllJX9am.js";import"./Plus-BtMtwdOE.js";import"./TextField-Dq4vf-_T.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
