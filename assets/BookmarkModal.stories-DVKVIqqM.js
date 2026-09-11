import{aa as m,a7 as o,c as l}from"./iframe-O8cJNgnH.js";import{B as r}from"./BookmarkModal-CwkqZMM_.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DKlAjCM8.js";import"./ModalBody-ClJuvryu.js";import"./Section-D1aETyw8.js";import"./Flex-oXvF6uEL.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./ButtonGroup-BrPvP3j_.js";import"./ButtonIcon-BRVIbE9d.js";import"./ButtonLabel-DpkPepTV.js";import"./MagnifyingGlass-DHpnscJf.js";import"./QueryLabel-BaiGIe-a.js";import"./Plus-B_TKpQ68.js";import"./TextField-DRwLVtRf.js";import"./FieldBase-SXGcT6A1.js";import"./Typography-DU3EjiaL.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
