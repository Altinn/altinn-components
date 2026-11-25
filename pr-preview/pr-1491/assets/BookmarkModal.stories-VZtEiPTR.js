var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CZm9Z2L_.js";import{B as p}from"./BookmarkModal-CUE70zmM.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-C4kkBz7a.js";import"./ModalBody-B6uDomnX.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ButtonGroup-7aJoGw6J.js";import"./ButtonIcon-C0K5IRwl.js";import"./ButtonLabel-CupeExgA.js";import"./MagnifyingGlass-DwPErScE.js";import"./QueryLabel-CMhNYYFg.js";import"./Plus-B_1tuTHV.js";import"./TextField-BDbZi5gp.js";import"./FieldBase-BiQdP4ez.js";import"./Typography-99BUGcV3.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
