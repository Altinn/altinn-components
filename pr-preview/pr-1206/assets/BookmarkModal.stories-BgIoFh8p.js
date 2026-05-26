import{s,p as o}from"./iframe-Ca1pxjCh.js";import{B as e}from"./BookmarkModal-lFp9Uqn2.js";import{B as i}from"./Button-BUoYLOjU.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BhsIDBtl.js";import"./ModalBody-DfLjWzAx.js";import"./Section-BSLTGuDV.js";import"./index-qsemo-NB.js";import"./Flex-CU26bbCS.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./Icon-DX2teY26.js";import"./Skeleton-CjJRr45L.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ButtonGroup-Bt3kIkZr.js";import"./ButtonIcon-DcnGBPH8.js";import"./ButtonLabel-VpsJZKmQ.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./QueryLabel-BQjDexh0.js";import"./Plus-C2mGPGYW.js";import"./TextField-B4w005z3.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./Label-Dpkw0Wq9.js";import"./tooltip-DBInG_0S.js";import"./Input-CnEzvrKf.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
